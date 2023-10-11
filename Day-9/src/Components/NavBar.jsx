import React from "react";
import { TelephoneFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActive } from "../Assets/Slices/UserSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <>     
        <nav
          id="navbar-id"
          className="navbar navbar-expand-lg"
          style={{ height: "9%", zIndex: "999", backgroundColor: "#1b273a" }}
        >
          <div className="container-fluid">
            <Link style={{ color: "white" }} className="navbar-brand px-3" to="/">
              <TelephoneFill size={20} className="mx-2" />
              <b>PhoneBook</b>
            </Link>
            <div className="d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    style={{ color: "white" }}
                    className="nav-link"
                    to="/signin"
                    onClick={() => dispatch(setActive({ active: "signin" }))}
                  >
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "white" }}
                    className="nav-link"
                    to="/signin"
                    onClick={() => dispatch(setActive({ active: "signup" }))}
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default NavBar;
