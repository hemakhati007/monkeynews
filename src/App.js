
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';

import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"; 


export default class App extends Component {

  render() {
    return (
      <div>

       <Router>
        <NavBar/>

        

        <Routes>
          
{/* for home */}
{/*  we are sendig unique key because react thinks it alerady had displayed the news so it wont chcek for the updation */}
          <Route exact path="/" element={<News key=" general"pageSize={5} country={"in"} category={"general"}/>}/>
          <Route exact path="/business" element={<News key="business"pageSize={5} country={"in"} category={"business"}/>}/> 
          <Route exact path="/entertainment" element={<News key="entertainment"pageSize={5} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/health" element={<News key="health"pageSize={5} country={"in"} category={"health"}/>}/>
          <Route exact path="/science"element={<News key="science"pageSize={5} country={"in"} category={"science"}/>}/>
          <Route exact path="/sports" element={<News key="sports"pageSize={5} country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<News key="technology"pageSize={5} country={"in"} category={"technology"}/>}/>
                  
        </Routes>

        {/* th ething is when we reloading the prop th react isnt reloading or remonting it */}
 {/* /so we giving unique keys to the news component so react wants aunique key to rerender */}
        </Router>
      </div>
    )
  }
}
