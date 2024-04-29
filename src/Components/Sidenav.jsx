import React from "react";
import { Link } from "react-router-dom";


const Sidenav = () => {
  return (
    <aside id='sidenav' className="font-xxl">
      <ul type="none" className="font-xxl">
        <li>
          <Link to="/main/home" className="flex">
            <i className="fa-solid fa-house"></i>
            <p className="link-text">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/main/about" className="flex">
            <i className="fa-solid fa-address-card"></i>
            <p className="link-text">Who we are</p>
          </Link>
        </li>
        <li>
          <Link to="/main/members" className="flex">
            <i className="fa-solid fa-user-group"></i>
            <p className="link-text">Our Partners</p>
          </Link>
        </li>
        <li>
          <Link to="/main/contact" className="flex">
            <i className="fa-solid fa-address-book"></i>
            <p className="link-text">Contact us</p>
          </Link>
        </li>
      </ul>

      <div className="divider"></div>

      <ul type="none" className="font-xxl">
        <li>
          <Link to="/main/profile" className="flex">
            <i className="fa-solid fa-user"></i>
            <p className="link-text">Profile</p>
          </Link>
        </li>
        <li>
          <Link to="/main/profile" className="flex">
            <i className="fa-solid fa-circle-info"></i>
            <p className="link-text">Help</p>
          </Link>
        </li>
      </ul>
      <div className="divider"></div>
    </aside>
  )
}

export default Sidenav