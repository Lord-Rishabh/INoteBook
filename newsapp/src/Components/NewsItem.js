import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  let alt_image = "https://cdn.sci.news/images/2023/06/image_12054f-Milky-Way-Neutrinos.jpg";
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className=" badge  bg-danger">{source}</span>
        </div>
        <img src={imageUrl ? imageUrl : alt_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">{description ? description : ""}</p>
          <p class="card-text"><small class="text-body-secondary">By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : ""}</small></p>
          <a href={newsUrl} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem