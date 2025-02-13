import React, { Component } from 'react'
import { Link,useLocation } from "react-router-dom";
// let location = useLocation();
// React.useEffect(() => {
//   console.log(location)
// }, [location.pathname]);

export class Navbar extends Component {
  render() {
    return (
      <div>     
   <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Divyam News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/General">General</Link> </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Business">Business</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Science">Science</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
    </div>
    )
  }
}

export default Navbar