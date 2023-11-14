import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, description, imgUrl, newsId } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetails/" className="btn btn-sm btn-primary">
              Read Full Story
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
