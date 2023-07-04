import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // async keyword is  before a function makes the function return a promise in JavaScript.
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=5`;
    // We are using loading so that when loading data a 'loading spinner' will be shown.
    setLoading( true );
    /* await keyword makes the function pause the execution and wait for a resolved promise
    before it continues. It is always used inside aysnc*/
    let data = await fetch(url);
    props.setProgress(30);
    // This will convert date from url to json file.
    let parsedData = await data.json();
    props.setProgress(70);
    // We are using setState to change the state we made in constructor.
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    
    props.setProgress(100);
    
  }

  // This works at last, i.e. after construtor and even after the render() in class component.
  useEffect(() => {
    
    document.title = `${props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} - NewsByRishabh`
    updateNews();
    //eslint-disable-next-line
  }, [])
  

  /* This is used for next and previous button
  handlePrevClick = async () => {

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  handleNextClick = async () => {

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  } */

  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=5`;
// We set page + 1 after getting url because it will take some time to set asynchronous function.
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

    return (<>

      <h1 className='text-center' style={{ margin: '35px', marginTop: '90px' }}> NewsByRishabh - Top {props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} Headline</h1>
     
      {/* This will show loading spinner gif if our state is loading. */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>

        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} newsUrl={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} />
              </div>
            })}
          </div>
          
        </div>
      </InfiniteScroll>
      {/*This was to add next and previous button 
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1}
            onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
          <button type="button" id="next" disabled={Math.ceil(this.state.totalResults / 18) <= this.state.page}
            onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        */}
    </>
    )
  
}

News.propTypes = {
  category: PropTypes.string,
  setProgress: PropTypes.number,
  apiKey: PropTypes.string
};
export default News

// Class Based Componenet : 

/*
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = `${props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} - NewsByRishabh`
  }

  static propTypes = {
    category: PropTypes.string,
    setProgress: PropTypes.number,
    apiKey: PropTypes.string
  };

  // async keyword is  before a function makes the function return a promise in JavaScript.
  updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=5`;
    // We are using loading so that when loading data a 'loading spinner' will be shown.
    this.setState({ loading: true });
    props.setProgress(10);
    // await keyword makes the function pause the execution and wait for a resolved promise
    //before it continues. It is always used inside aysnc
    let data = await fetch(url);
    props.setProgress(55);
    // This will convert date from url to json file.
    let parsedData = await data.json();
    // We are using setState to change the state we made in constructor.
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page : this.state.page + 1 ,
    });
    props.setProgress(100);
    
  }

  // This works at last, i.e. after construtor and even after the render() in class component.
  async componentDidMount() {
    this.updateNews();
  }

  // This is used for next and previous button
  // handlePrevClick = async () => {

  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {

  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // } 

  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (<>

      <h1 className='text-center' style={{ margin: '35px' }}> NewsByRishabh - Top {props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} Headline</h1>
      //  This will show loading spinner gif if our state is loading. 

      {this.state.loading && <Spinner />}
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}>

        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} newsUrl={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} />
              </div>
            })}
          </div>
          
        </div>
      </InfiniteScroll>
      // This was to add next and previous button 
      //   </div>
      //   <div className="container d-flex justify-content-between">
      //     <button type="button" disabled={this.state.page <= 1}
      //       onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
      //     <button type="button" id="next" disabled={Math.ceil(this.state.totalResults / 18) <= this.state.page}
      //       onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
      //   

    </>
    )
  }
}
 */