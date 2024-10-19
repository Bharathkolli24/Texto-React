import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl,newsUrl,author,date,source} = props;     //we using "this." here because it is a class based component
    return (
      <div className='my-3'>
        <div className="card h-100">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger"> {source}</span>  {/* This is for badge on the card like if you see on local host there is red badge on top of card*/}
          </div>
          {/* <img src={imageUrl}/> If we uncomment this .It'll show double images*/}
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxmUp1TeJQGcCEQUtPxdvP9Tip8j6alc_wA&s":imageUrl} alt=""/>    {/*We use this ternary operation when image shown is null. When no image was there in API then it uses provided url's image*/}        
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>by {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem