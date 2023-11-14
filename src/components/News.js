import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  //runs after render
  async componentDidMount(){
   let url =
     "https://newsapi.org/v2/top-headlines?country=in&apiKey=87dd94c566bc44f79aae430871b6c761&page=1&pageSize=20";
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults}); 
  }

handlePrevClick = async ()=> {
let url =
     `https://newsapi.org/v2/top-headlines?country=in&apiKey=87dd94c566bc44f79aae430871b6c761&page=${this.state.page - 1}&pageSize=20`;
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({
       page: this.state.page - 1,
       articles: parsedData.articles,
     });
}

handleNextClick = async ()=> {
  if(this.state.page + 1 >Math.ceil(this.state.totalResults/20)){

  } else {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=87dd94c566bc44f79aae430871b6c761&page=${
      this.state.page + 1
    }&pageSize=20`;
       let data = await fetch(url);
       let parsedData = await data.json();
       this.setState({
         page: this.state.page + 1,
         articles: parsedData.articles,
       });
  }
}

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsId={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-center"> 
                <button type="button" className="btn btn-light mx-2" disabled={this.state.page<=1} onClick={this.handlePrevClick}>
                  &larr; Previous
                </button>
                <button type="button" className="btn btn-light" onClick={this.handleNextClick}>
                  Next &rarr;
                </button>
        </div>
      </div>
    );
  }
}

export default News
