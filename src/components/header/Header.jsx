import React from 'react'
import './header.css'
import LOGO from './../../assets/LOGO.png'

const Header = () => {
  return (
    <div className="row">
      <div className="col-md-3 my-auto">
        <img src={LOGO} className='logo__image' />
      </div>
      <div className="col-md-3 my-auto link">
        <a href="mailto:hurt@amracing.pl" >hurt@amracing.pl</a>
      </div>
      <div className="col-md-3 my-auto link">
        <a href="tel:783534075">783534075</a>
      </div>
      <div className="col-md-3 my-auto button_link">
        <a href="https://b2b-amracing.pl/">b2b-amracing.pl</a>
      </div>
    </div>
    
  )
}

export default Header