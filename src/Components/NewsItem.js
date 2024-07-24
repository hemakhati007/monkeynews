import React, { Component } from 'react'

export class NewsItem extends Component {

      

  render() {
    // newsurl are for the unique identity of news
    let {title,description,imgurl,newsurl ,author,date,source}=this.props; 
    // this.prop have title and description whuch destructuring is happening the values are getting pull
    return (
      <div className='my-3'>
                  <div className="card" >
            <img src={imgurl?imgurl:"https://images.livemint.com/img/2024/07/20/1600x900/NASA_1715136814616_1721459721513.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'89%',zIndexindex:'1'}}> {source} </span></h5>
              
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl}  className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div> 
    )
  }
}

export default NewsItem
