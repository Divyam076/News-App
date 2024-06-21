import React, { Component } from 'react'
import Spinner from './Spinner.js';
import NewsItem from './NewsItem.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

      static defaultProps={
        country:'in',
        category:"general",
        pagesize:5
      }

      static propTypes={
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number
      }

      Capitalize=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

    constructor(props){
      super(props);
      console.log("This is a constructor");
      this.state={
        articles:[],
        loading:true,
        page:1,
        totalresults:0,
       
      }
      document.title= `${this.Capitalize(this.props.category)}-News Monkey`
    }
    async updatenews(){   
      this.props.setprogress(10);
      let url=(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=97be4eb6c42f460280d272dfd144cb73&page=${this.state.page}&pagesize=${this.props.pageSize}`);
    this.setState({loading:true})
    let data=  await fetch(url);
    this.props.setprogress(30);
    let parseddata=await data.json();
    console.log(parseddata);
    this.props.setprogress(70);
    this.setState({articles:parseddata.articles,totalresults:parseddata.totalresults, loading:false});
    this.props.setprogress(100);
    } 

    async componentDidMount(){
      this.updatenews();
    }
    
    handleLeftClick= async ()=>{
     this.updatenews();
     this.setState({
      page:this.state.page - 1
     })
    }

    fetchMoreData = async () => {
     
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=97be4eb6c42f460280d272dfd144cb73&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ page: this.state.page + 1 })
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
         
      })
  };

    handleNextClick=async ()=>{
      let url=(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=97be4eb6c42f460280d272dfd144cb73&page=${this.state.page+1}&pagesize=${this.props.pageSize}`);
      this.setState({loading:true})
      let data=  await fetch(url);
      let parseddata=await data.json();
      console.log(parseddata);
      this.setState({articles:parseddata.articles,totalresults:parseddata.totalresults, loading:false});
      this.setState({
       page:this.state.page + 1
      })}


   

    
    render() {
    return (
        <div className="container my-3">
            <h1 className="text-center" style={{margin:"35px", marginTop:"90px"}}>News Monkey-{this.Capitalize(this.props.category)} Headlines</h1>
            {this.state.loading===true &&<Spinner/>}
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalresults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
            { this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title!==null?element.title:""} description={element.description!==null?element.description:" "} imageurl={element.urlToImage?element.urlToImage:"https://images.wsj.net/im-576546/?width=860&size=1.5&pixel_ratio=1.5"} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author}  name={element.source.name}/>
               </div>
            })}
            </div>
            </div>
            
            </InfiniteScroll>
        </div>
    )
  }
}

export default News








