import React from 'react'
import PropTypes from 'prop-types'
import { Link as L } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
     <div className="container-fluid">
       <L className="navbar-brand" to="/">{props.title}</L>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <L className="nav-link active" aria-current="page" to="/">Home</L>
           </li> 
           <li className="nav-item">
             <L className="nav-link" to="/about">{props.aboutText}</L>
           </li>
         </ul>
         {/* <form className="d-flex" role="search">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-success" type="submit">Search</button>
         </form> */}
         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
         </div>
       </div>
     </div>
   </nav>
  )
}

Navbar.protoType={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

Navbar.defaultPros={
    title:"TextUtils",
    aboutText:"About"
}