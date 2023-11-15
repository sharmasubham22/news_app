import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, description, imgUrl, newsId, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'80%', zIndex:'1'}}>
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              !imgUrl
                ? "https://euaa.europa.eu/sites/default/files/styles/width_600px/public/default_images/news-default-big.png?itok=NNXAZZTc"
                : imgUrl
            }
            className="card-img-top "
            style={{ objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">
              <b>{title}...</b>
            </h6>
            <p style={{ fontSize: "14px" }} className="card-text">
              {description}...
            </p>
            <p class="card-text" style={{ fontSize: "14px" }}>
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsId} className="btn btn-sm btn-dark">
              Read Full Story
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
