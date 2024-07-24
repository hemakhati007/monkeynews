import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:5,
    category:'general',
 }

 static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
 }
    // articles= [
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //       "publishedAt": "2020-04-27T11:41:47Z",
    //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //       "publishedAt": "2020-03-30T15:26:05Z",
    //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    //   ]


    //flow constructor render than cdm
    constructor(props)
    {
       super(props);//necessary to call super class of it 
     console.log("hello");
     this.state={
        articles:[],//artucle is an array
        loading:false,
        page:1
   };
      document.title= this.props.category;

    }

    //FETCHING DATA FROM API
     
    //  single function  to udate news for next prev function

    async updateNews()
    {
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce16821afe244d4eb3d785b3c9d37c43&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);//fetching data from api
      let parsedData=await data.json()//parsing data to json
     

      // setting the state for the data
      this.setState({articles:parsedData.articles,totalResult:parsedData.totalResults,loading:false});
    }

    //async function cuz we want to await the dat to be fetched 
   async componentDidMount()
    {
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b72b5f77d1e44041ae78c348821512fc&page=1&pageSize=${this.props.pageSize}`;
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce16821afe244d4eb3d785b3c9d37c43&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data= await fetch(url);//fetching data from api
      // let parsedData=await data.json()//parsing data to json
     

      // // setting the state for the data
      // this.setState({articles:parsedData.articles,totalResult:parsedData.totalResults,loading:false});
      // acessing total article no in fetched dat
      this.updateNews();

    }

   handlePrev=async()=>
   {
          
    //    console.log("prev");
    //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce16821afe244d4eb3d785b3c9d37c43&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //    this.setState({loading:true});
    //   let data= await fetch(url);
    //   let parsedData=await data.json();
     
       
    // this.setState(
    //   {
    //     page: this.state.page-1,
    //    articles:parsedData.articles,
    //    loading:false
    //   }
    // );

    this.setState(
         {
          page: this.state.page-1});
     this.updateNews() ;    

   };


   //onclicking next button we wanta handleNext method to fetch nest page content

   handleNext=async()=>{

    

       
        
          //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce16821afe244d4eb3d785b3c9d37c43&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          //   this.setState({loading:true});
          //   let data= await fetch(url);
          //   let parsedData=await data.json();
          
          // this.setState(
          //   {
          //     page: this.state.page+1,
          //   articles:parsedData.articles,
          //   loading:false
          //   }

          // );
          this.setState(
            {
             page: this.state.page+1});
             this.updateNews() ;   
      

      
   };


  render() {
    return (
      <div className=' container my-3'>
         <h2 className="text-center" style={{margin:'30px 35px'}}>{`MonkeyNews -${this.props.category} Top Headlines}`}</h2>
        {this.state.loading&& <Spinner/>}
        
{/* BOOTSTRAP */}
         <div className="row">
            {/* single row */}

            {/* column of 3  rows but as we have only one item than one column?? */}

                {/* in medium devices it will take 3columns , in bootstrap 12 column grid is present
                to take full space of conatiner make it 4 ===4*3=12 12 column grid */}

            {/* <div className="col-md-4">
                
                <NewsItem  title="mytitle" description="mydesc" imgurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" />
            </div> */}



            {/* returning the elements in the article to show up in DOM  */}

            {!this.state.loading&&this.state.articles ?(this.state.articles.map((element)=>{

                  return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,78):""} imgurl={element.urlToImage}  newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    
                  </div>

            })):(
              <div>No articles available</div>
            )}
           


{/* in the class row  the columns we add they will auto sligin themselves  */}
         {/* previously used befor iteration */}
            {/* replicating the column so we can have multuple columns in a row
            <div className="col-md-4">
                <NewsItem  title="mytitle" description="mydesc"/>
            </div>
            <div className="col-md-4">
                <NewsItem  title="mytitle" description="mydesc"/>
         </div> */}
          </div>
          <div className=" container d-flex justify-content-between">
            {/* using disable  make the button deisable if page=1 */}
          <button disabled={this.state.page===1?true:false} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; previous</button>

          {/* to calcuate the if there is next page or not    */}
        {/* we have a pageSize parameter in  this news api if its 2 each page will have two news   
        we know how many articles are given=== parsedData.totalResult 
        no of pages we will have  math.ceil(totalresult/pageSize)*/}
       
          <button disabled={(this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize))}
          type="button" className="btn btn-dark" onClick={this.handleNext}>next &rarr; </button>
          </div>
      </div>
    )
  }
}
