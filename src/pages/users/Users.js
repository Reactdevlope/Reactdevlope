import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../site/Footer";

export default function Users() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 mb-4">
          <nav className="navbar-expand-lg navbar-light">
            <div className="row justify-content-center">
              <div className="col-9 col-sm-8 col-md-8 col-lg-10 col-xl-12">
                <Link to="/" className="navbar-brand">
                  <img
                    src='../assets/img/atbeloved.png'
                    alt="Logo"
                    className="mt-5 img-fluid px-4"
                  />
                </Link>
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
                      <Link
                        to="/users/aboutfamily"
                        className="nav-link active atb-site-menu atb-site-menu-item text-white mb-4 ps-4"
                      >
                        ABOUT FAMILY
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/users/belovedperson"
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        ABOUT BELOVED PERSON
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/memories"
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        MEMORIES
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        THOUGHTS
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        EVENTS
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link atb-site-menu atb-site-menu-item text-white mb-4 ps-4 pe-5"
                      >
                        LOG OUT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* outlet  */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9 atb-right-side">
          <Outlet />
        </div>

        {/* Footer content */}
        <Footer/>
      </div>
    </div>
  );
}
