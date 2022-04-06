import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function site() {
  const navLinkStyle =({isActive})=>{
    return {
      backgroundColor: isActive ? '#dc2121' : '#2f2f2f'
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 mb-4">
          <nav className="navbar-expand-lg navbar-light">
            <div className="row justify-content-center">
              <div className="col-9 col-sm-8 col-md-8 col-lg-10 col-xl-12">
                <NavLink to="/" className="navbar-brand">
                  <img
                    src='./assets/img/atbeloved.png'
                    alt="Logo"
                    className="mt-5 img-fluid px-4"
                  />
                </NavLink>
              </div>
              <div className="col-3 col-sm-4 col-md-4 pt-5">
                <button
                  className="navbar-toggler float-end"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0 flex-column mt-5">
                    <li className="nav-item">
                      <NavLink
                        to="/aboutus" style={navLinkStyle}
                        className="nav-link active atb-site-menu atb-site-menu-item text-white mb-4 ps-4"
                      >
                        ABOUT BELOVED
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/start" style={navLinkStyle}
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        HOW TO START BELOVED?
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/memories" style={navLinkStyle}
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        MEMORIES
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/thoughts" style={navLinkStyle}
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        THOUGHTS
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/events" style={navLinkStyle}
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        EVENTS
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/login" style={navLinkStyle}
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        LOGIN OR SIGNUP
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
          <Outlet />
        </div>

        <Footer/>
      </div>
    </div>
  );
}
