import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/static/images/ctu-buddy-logo.png";
import "./Topnav.css";

export default function Topnav() {
  return (
    <>
      <nav className="navbar">
        <input type="checkbox" id="expand" />
        <div className="container">
          <Link to="/">
            <img src={logo} alt="CTU Buddy" className="logo-img" />
          </Link>
          <label htmlFor="expand" className="bar">
            <span className="fa-solid fa-bars" id="bars"></span>
            <span className="fa-solid fa-times" id="times"></span>
          </label>
        </div>
        <menu>
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-home" id="home"></i>
              &nbsp;Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timetable">
              <i className="fa-solid fa-calendar-week" id="timetable"></i>
              &nbsp;Timetable
            </NavLink>
          </li>
          <li>
            <NavLink to="/discussion">
              <i className="fa-solid fa-comment-dots" id="discussion"></i>
              &nbsp;Discussion
            </NavLink>
          </li>
          <li>
            <NavLink to="/share-resources">
              <i className="fa-solid fa-share-nodes" id="share-resources"></i>
              &nbsp;Share Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              <i className="fa-solid fa-circle-info" id="about-us"></i>
              &nbsp;About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">
              <i className="fa-solid fa-message" id="contact-us"></i>
              &nbsp;Contact Us
            </NavLink>
          </li>
        </menu>
      </nav>
      <Outlet />
    </>
  );
}
