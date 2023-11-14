import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, description, imgUrl, newsId } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: "22rem" }}>
          <img
            src={
              !imgUrl
                ? "https://euaa.europa.eu/sites/default/files/styles/width_600px/public/default_images/news-default-big.png?itok=NNXAZZTc"
                : imgUrl
            }
            className="card-img-top"
            height="150px"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">
              <b>{title}...</b>
            </h6>
            <p style={{fontSize:"14px"}} className="card-text">{description}...</p>
            <a href={newsId} target="_blank"  className="btn btn-sm btn-primary">
              Read Full Story
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
