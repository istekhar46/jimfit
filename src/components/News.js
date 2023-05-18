import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './Newsitem'
import Spinnig from './Spinning';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarcticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    // document.title = this.capitalizeFirstLetter(this.props.category) + ' - NewsApp';


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=health&apiKey=45bd1e57d7c34c7a8a0003225896b312&pagesize=${props.pagesize}&page=${page}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        setarcticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
    }, ([]))


    const fetchMoreData = async () => {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=health&apiKey=45bd1e57d7c34c7a8a0003225896b312&pagesize=${props.pagesize}&page=${page + 1}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        setarcticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setpage(page + 1)
        setloading(false)
        props.setProgress(100)
    }

    return (
        <>

            <h1 className='text-center'style={{marginTop:'110px'}} >Today's Top {capitalizeFirstLetter("Health")} Headlines </h1>
            {loading && <Spinnig />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinnig />}
            >
                <div className='container my-2'>
                    <div className="row ">
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unkwon"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll >

        </>
    )
}


News.defaultProps = {
    pagesize: 8,
    country: "in",
    category: "Health"
}

News.PropsTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News