import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div>
            <section id="contact" className="footer_wrapper ">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 footer_logo mb-lg-0">
        <img src="./images/favicon.png" alt="" className="img-fluid" /><span className="footer_title">Digital Shark</span>
        <p className="footer_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sint natus dicta distinctio commodi iure,
         praesentium inventore debitis amet architecto numquam illo consectetur expedita veniam maxime qui mollitia neque repellat!</p>
      </div>

      <div className="col-lg-4 px-lg-5 mb-4 mb-lg-0">
        <h3 className="footer_title">Contact</h3>
        <p className="footer_text">
          <Link to={``} >digitalshark.services@gmail.com</Link><br />
          <Link to={``}  className="footer-address">2 /254 South <br />Cbn City,453464,MYTG</Link>
        </p>
      </div>
      <div className="col-lg-3 mb-4 mb-lg-0">
        <h3 className="footer_title">Social Media</h3>
        <p>
          <Link to={``} className="footer_social_media_icon"><i className="fab fa-facebook-f"></i></Link>
          <Link to={``} className="footer_social_media_icon"><i className="fab fa-instagram"></i></Link>
          <Link to={``} className="footer_social_media_icon"><i className="fab fa-linkedin-in"></i></Link>
          <Link to={``} className="footer_social_media_icon"><i className="fab fa-dribbble"></i></Link>

    
        </p>
      </div>

      <div className="col-12 footer_credit text-center">
        <span>&copy; 2021 <a href="" target="_blank" title="infocare solutions">infocareSolutions</a>&trade;.All Rights Reserved</span>
      </div>

    </div>
  </div>
</section>
        </div>
    )
}
