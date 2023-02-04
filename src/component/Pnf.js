import React from "react";
import { Link } from "react-router-dom";


export default function Pnf() {
  return (
    <>
    
       <div className="container pt-5 mt-5 mb-5 pb-5 text-center ">
        <div className="row pb-5">
          <h1 className="fw-bold text-danger">Soory Page Not Found ! </h1>
          <p className="text-danger"> *** we are sorry But This page is not exist *** </p>
          <div className="col-md-6 mx-auto">
            <Link to={`/home`} className="btn btn-outline-info mb-2 mt-5 " >Back to home</Link>
          </div>
        </div>
      </div>


    </>
  );
}
