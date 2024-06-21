import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsUrl,author,publishedAt,name}=this.props;
    return (
      <div className="my-3">
      <div><div className="card">
      <img src={imageurl}className="card-img-top" alt="..."/>
      <div className="card-body">
    <span class="badge rounded-pill text-bg-danger">{name}</span>
        <h5 className="card-title">{title}... </h5>
        <p className="card-text">{description}...</p>
        <p class="card-text"><small class="text-muted">{!author?'Unknown':author} on {new Date(publishedAt).toGMTString()}</small></p>
        <a href={newsUrl} target='blank' className="btn btn-sm btn-secondary">Read More</a>
      </div>
    </div></div>
    </div>
    )
  }
}

export default NewsItem