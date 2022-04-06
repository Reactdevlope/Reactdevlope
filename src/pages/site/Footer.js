import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="atb-site bg-dark">
          <nav className="navbar">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Terms & condition
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  What is ATBELOVED ?
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Our Vision and Mission
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white">
                    Powered by ATJOIN
                  </Link>
                </li>
              </ul>
            </form>
          </nav>
        </div>
  )
}
