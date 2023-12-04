import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent text-gray-700 fixed top-0 left-0 w-full z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <NavLink to="/" exact activeClassName={styles.activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={styles.activeLink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName={styles.activeLink}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName={styles.activeLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Lubna</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000000",
                background: isActive ? "#000000" : "fff",
                borderRadius: isActive ? 30 : 30,
                paddingInline: isActive ? 15 : 15,
                paddingTop: isActive ? 5 : 5,
                paddingBottom: isActive ? 5 : 5,
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000000",
                background: isActive ? "#000000" : "fff",
                borderRadius: isActive ? 30 : 30,
                paddingInline: isActive ? 15 : 15,
                paddingTop: isActive ? 5 : 5,
                paddingBottom: isActive ? 5 : 5,
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000000",
                background: isActive ? "#000000" : "fff",
                borderRadius: isActive ? 30 : 30,
                paddingInline: isActive ? 15 : 15,
                paddingTop: isActive ? 5 : 5,
                paddingBottom: isActive ? 5 : 5,
              })}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000000",
                background: isActive ? "#000000" : "fff",
                borderRadius: isActive ? 30 : 30,
                paddingInline: isActive ? 15 : 15,
                paddingTop: isActive ? 5 : 5,
                paddingBottom: isActive ? 5 : 5,
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        
      </div> */}
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-black font-bold text-lg">
//           <NavLink to="/">Logo</NavLink>
//         </div>
//         <div className="space-x-4">
//           <NavLink
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? "#fff" : "#545e6f",
//               background: isActive ? "#7600dc" : "#f0f0f0",
//               borderRadius: isActive ? 30 : 0,
//               paddingInline: isActive ? 15 : 15,
//               paddingTop: isActive ? 5 : 5,
//               paddingBottom: isActive ? 5 : 5,
//             })}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             style={({ isActive }) => ({
//               color: isActive ? "#fff" : "#545e6f",
//               background: isActive ? "#7600dc" : "#f0f0f0",
//               borderRadius: isActive ? 30 : 0,
//               paddingInline: isActive ? 15 : 15,
//               paddingTop: isActive ? 5 : 5,
//               paddingBottom: isActive ? 5 : 5,
//             })}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/contact"
//             style={({ isActive }) => ({
//               color: isActive ? "#fff" : "#545e6f",
//               background: isActive ? "#7600dc" : "#f0f0f0",
//               borderRadius: isActive ? 30 : 0,
//               paddingInline: isActive ? 15 : 15,
//               paddingTop: isActive ? 5 : 5,
//               paddingBottom: isActive ? 5 : 5,
//             })}
//           >
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
