import React  from 'react'
import pic from "../gifs/ErrorImage.gif"

 const  NewsItem = (props) => {
        let { title, desc, imgUrl, newsUrl, author, date, source } = props;
        return (

            <div className="card">
                <div className="span" style={{
                    backgroundColor: 'red',
                    borderRadius: '6px',
                    padding: '0 9px',
                    fontSize: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span>
                        {source}
                    </span>
                </div>
                <img src={imgUrl ? imgUrl :pic } className="card-img-top" alt="..." />
                <div className="card-body my-2">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blanck' className="btn btn-sm btn-dark">Read more</a>

                </div>
            </div>
        )
    
}

export default NewsItem