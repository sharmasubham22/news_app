import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsId, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: "80%", zIndex: "1" }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
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
          <p className="card-text" style={{ fontSize: "14px" }}>
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsId}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read Full Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
