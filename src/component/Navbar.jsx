import React from "react";
import {Link} from 'react-router-dom'


const Navbar=()=>{

  return(
    <div>
      <nav className="navbar navbar-extand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="link" to='/'><h2 className="navbar-brand">ClockPage</h2></Link>
          <div className="">
           
              <ul className="" >
                <li className="nav-item">
                 <Link to='/' className="link navbar-brand">Clock</Link>  
                </li>
                <li className="nav-item">
                  <Link to='/worldclock' className="link navbar-brand">World Clock</Link>  
                </li>
                <li className="nav-item">
                  <Link to='/stopwatch' className="link navbar-brand">Stop Watch</Link> 
                </li>
              </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar