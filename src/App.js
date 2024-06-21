
import './App.css';
import Navbar from './Components/Navbar.js'
import News from './Components/News.js'
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state={
    progress:0
  }

setprogress=(Progress)=>{
this.setState({progress:this.state.progress})

}


  render() {



    
    return (
    <div>
      <BrowserRouter>
<Navbar/> 
<LoadingBar
          height={10}
          color='#f11946'
         progress={this.state.progress}
        />

      <Routes>
      <Route exact path="/" element={<News setprogress={this.setprogress}key={"general"} pageSize={5} country= "in" category="general" />} />
      <Route exact path="/general" element={<News setprogress={this.setprogress}key={"general"} pageSize={5} country= "in" category="general" />} />
      <Route exact path="/sports" element={<News setprogress={this.setprogress}key={"sports"} pageSize={5} country= "in" category="sports" />} />
      <Route exact path="/business" element={<News setprogress={this.setprogress}key={"business"} pageSize={5} country= "in" category="business" />} />
      <Route exact path="/entertainment" element={<News setprogress={this.setprogress}key={"entertainment"} pageSize={5} country= "in" category="entertainment" />} />
      <Route exact path="/technology" element={<News setprogress={this.setprogress}key={"technology"} pageSize={5} country= "in" category="technology" />} />
      <Route exact path="/health" element={<News setprogress={this.setprogress}key={"health"} pageSize={5} country= "in" category="health" />} />
      <Route exact path="/science" element={<News setprogress={this.setprogress}key={"science"} pageSize={5} country= "in" category="science" />} />

</Routes>
</BrowserRouter>
    </div>
    )
  }
}
