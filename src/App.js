
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';

import News  from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"; 

import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {


  apiKey=process.env.REACT_APP_NEWS_API;
   state={
    progress:0,
    
   }
   setProgress=(progress)=>
  {
    this.setState({ progress });
  }

  render() {
    return (
      <div>

       <Router>
       
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
       <NavBar/>

        

        <Routes>
          {/* const  apikey=process.env.REACT_APP_NEWS_API; */}
          
          
{/* for home */}
{/*  we are sendig unique key because react thinks it alerady had displayed the News setProgress={this.setProgress}  setProgress-{this.setProgress}  so it wont chcek for the updation */}
          <Route exact path="/" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key=" general"pageSize={5} country={"in"} category={"general"}/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="business"pageSize={5} country={"in"} category={"business"}/>}/> 
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="entertainment"pageSize={5} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="health"pageSize={5} country={"in"} category={"health"}/>}/>
          <Route exact path="/science"element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="science"pageSize={5} country={"in"} category={"science"}/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="sports"pageSize={5} country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="technology"pageSize={5} country={"in"} category={"technology"}/>}/>
                  
        </Routes>

        {/* th ething is when we reloading the prop th react isnt reloading or remonting it */}
 {/* /so we giving unique keys to the News component so react wants aunique key to rerender */}
        </Router>
      </div>
    )
  }
}
