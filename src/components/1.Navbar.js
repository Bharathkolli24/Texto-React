import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    //  we are enclosing it in {} brackets bcoz we are converting it from string to javascript  and backticks`` is used for using template literal
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>       
      <div className="container-fluid"> 
        <a className={`navbar-brand text-${props.mode ==='light' ?'dark':'light'} `} href="#">{props.title}</a>                  
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              {/* <Link className={`nav-link active text-${props.mode ==='light' ?'dark':'light'}`} aria-current="page" to="/">Home</Link> */}
              <a className={`nav-link active text-${props.mode ==='light' ?'dark':'light'}`} aria-current="page" href="#">Home</a>
            </li>
            
            {/* <li className="nav-item">
              <Link className={`nav-link text-${props.mode ==='light' ?'dark':'light'}`} to="/about">{props.aboutTextUtils}</Link>
            </li>*/}
          </ul> 


          <div className={`form-check form-switch text-${props.mode ==='light' ?'dark':'light'}`}>  {/* changing the color of text depend on the mode so we have defined ternary operation like this */}
            <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2 mx-4" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,     //when we defined it as required we should pass the value otherwise it'll show the error
  aboutTextUtils: PropTypes.string.isRequired
}
// Navbar.defaultProps = {            //It is a Default props :- It is used when we have not passed any propertioes   
//     title:'Set title here',
//     aboutTextUtils:'About Text here'
// }
