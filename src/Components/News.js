import React, { useEffect ,useState} from "react";


import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";


import InfiniteScroll from "react-infinite-scroll-component";

const News=({ country="in",pageSize=5,category="general",setProgress,apiKey})=>{
 
  

   const[articles,setArticles]=useState([])
   const[loading,setLoading]=useState(false)
   const[page,setPage]=useState(1)
   const[totalResult,settotalResults]=useState(0)
   

  
  //  document.title =  category;

  //FETCHING DATA FROM API

  //  single function  to udate news for next prev function

 const updateNews= async() =>{
     setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${ apiKey}&page=${page}&pageSize=${ pageSize}`;
    setLoading(false);
    let data = await fetch(url); //fetching data from api
     setProgress(30);
    let parsedData = await data.json(); //parsing data to json
     setProgress(50);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    
   
     setProgress(100);
  }
   
  useEffect(()=>
  {
    updateNews();
  },[])
  

  // const handlePrev = async () => {
   

  //   setPage(page+1);
  //  updateNews();
  // };

  //onclicking next button we wanta handleNext method to fetch nest page content

  // const handleNext = async () => {
   
  //   setPage(page+1);
  // updateNews();
  // };

  const fetchMoreData = async () => {
    setPage(page+1);
    // /updating function

    const url = `https://newsapi.org/v2/top-headlines?country=${ country}&category=${ category}&apiKey=${ apiKey}&page=${page}&pageSize=${ pageSize}`;

    let data = await fetch(url); //fetching data from api
    let parsedData = await data.json(); //parsing data to json

    setArticles( articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setLoading(false);
   // console.log(this.state.articles.length,this.state.totalResult);

  };

  
    return (
      <div className=" container my-3">
        <h2
          className="text-center"
          style={{ margin: "30px 35px" }}
        >{`MonkeyNews -${ category} Top Headlines`}</h2>
        {loading&& <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <totalResult}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">

                {articles.map((element) => {
                  return (
                    <div className="col-md-4" key={`${articles.title}-${articles.index}-${Math.random()}`}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 78)
                            : ""
                        }
                        imgurl={element.urlToImage}
                        newsurl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })
              }


            </div>
          </div>
        </InfiniteScroll>

      
      </div>
    );

};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;