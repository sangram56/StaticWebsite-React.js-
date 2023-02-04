import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Menu() {
  const user = JSON.parse(localStorage.getItem("user-info"));

  function logout() {
    localStorage.clear();
    toast.success("succesfully sign out ");
    window.location.href = "/register";
  }

  return (
    <div>
      <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./images/favicon.png" alt="" className="img-fluid " />
              Digital Shark
            </a>
            <button
              className="navbar-toggler pe-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/*  <span className="navbar-toggler-icon"></span>  */}
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav menu-navbar-nav fw-bold">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={`/home`}>
                    <span>
                      {" "}
                      <i class="fas fa-home"></i>
                    </span>
                    Home
                  </Link>
                </li>
                {localStorage.getItem("user-info") ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={`/features`}>
                        <span>
                          <i class="fab fa-servicestack"></i>
                        </span>{" "}
                        Features
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={`/pricing`}>
                        <span>
                          <i class="fas fa-tags"></i>
                        </span>{" "}
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={`/about`}>
                        <span>
                          <i class="fas fa-address-card"></i>
                        </span>{" "}
                        About Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={`/contact`}>
                        <span>
                          <i class="fas fa-phone"></i>
                        </span>{" "}
                        Contact US
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={`/faq`}>
                        <span>
                          <i class="fas fa-question"></i>
                        </span>{" "}
                        FAQ
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={`/register`}>
                        <span>
                          <i class="fas fa-registered"></i>
                        </span>
                        SignUp
                      </Link>
                    </li>
                  </>
                )}

                {localStorage.getItem("user-info") ? (
                  <li class="nav-item dropdown list-unstyled">
                    <a
                      class="nav-link dropdown-toggle text-warning text-capitalize"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user && user.username}
                    </a>
                    <ul class="dropdown-menu border border-warning">
                      <Link
                        class="dropdown-item bg-transparent btn-sm fw-bold me-md-5 "
                        to={`/logout`}
                        onClick={logout}
                      >
                        SignOut
                      </Link>
                    </ul>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}


