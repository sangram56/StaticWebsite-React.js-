import React from "react";
import { Link } from "react-router-dom";


import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
    
        {/* hero section start */}
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 header-img-section">
              <img src="./images/hero_img.png" className="img-fluid" alt="Banner" />
            </div>

            <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
              <p className="banner-subtitle">Socila Media Marketing</p>
              <h1 className="banner-title">
                Start<span> connection with</span>Your Online Customer
              </h1>
              <p className="banner-title-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias consectetur et corporis magnam laboriosam
              </p>
              <div className="learn-more-btn-section">
                <Link
                 to={`/contact`}
                  className="nav-link learn-more-btn btn-header mybtn1"
                >
                  Start your free Triel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section ends */}


    


      {/* about section */}
      
<section id="about" className="about_wrapper">
  <div className="container">
  <div className="row align-items-center">
        <div className="col-sm-12 col-lg-6 text-center text-lg-start">
          <p className="about_number">2</p>
          <p className="about_title">The best digialmarkeing company we understand your needs</p>
          <p className="about_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto tempore repellat, iste voluptatibus, quia soluta error vel voluptate blanditiis maiores minus! Sed dolores nobis et maiores porro in cum maiores minus! Sed dolores nobis et maiores porro in cum!</p>
          <Link className="learn-more-btn btn-header" to={`/features`}>Learn MOre</Link>
        </div>
        <div className="col-sm-12 col-lg-6 text-center text-md-start">
          <img src="./images/innovation.png" alt="" className="img-fluid" />
        </div>
      </div>
    
  </div>

  <div className="innovate mt-5">
    <div className="container">
    <div className="row align-items-center">
    <div className="col-sm-12 col-lg-7 text-center text-md-start">
        <img src="./images/commerce.png" alt="" className="img-fluid" />
      </div>
      <div className="col-sm-12 col-lg-5 text-center text-lg-start">
        <p className="about_number">1</p>
        <p className="about_title">showcase your brand beautifully with our service</p>
        <p className="about_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto tempore repellat, iste voluptatibus, quia soluta error vel voluptate blanditiis maiores minus! Sed dolores nobis et maiores porro in cum maiores minus! Sed dolores nobis et maiores porro in cum!</p>
        <Link className="learn-more-btn" to={`/features`}>find out more </Link>
      </div>
      
    </div>
    </div>
  </div>

  <div className="projects">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 text-center">
          <h2>8,500</h2>
          <p>Completed Projects</p>
        </div>
        <div className="col-sm-6 col-lg-3 text-center">
          <h2>9,500</h2>
          <p>Happy Clients</p>
        </div>
        <div className="col-sm-6 col-lg-3 text-center">
          <h2>1000</h2>
          <p>Ongoing Projectc</p>
        </div>
        <div className="col-sm-6 col-lg-3 text-center">
          <h2>70</h2>
          <p>Award Winnings</p>
        </div>

      </div>
    </div>
  </div>

</section>
      {/* abput section endsends */}



      {/* <!-- brand section --> */}
<section id="brands" className="brand_wrapper">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <p className="brand_subtitle fw-bold">Who we work with</p>
        <h2 className="brand_title">Clients showcase</h2>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-sm-2 col1 showcase_card align-self-center">
        <Link to={``}><img src="./images/dummy_logo1.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo2.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo3.png" alt="" className="mb-4 img-fluid" /></Link>
      </div>
      <div className="col-sm-2 col1 showcase_card align-self-center">
        <Link to={``}><img src="./images/dummy_logo2.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo1.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo3.png" alt="" className="mb-4 img-fluid" /></Link>
      </div>
      <div className="col-sm-2 col1 showcase_card align-self-center">
        <Link to={``}><img src="./images/dummy_logo3.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo2.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo3.png" alt="" className="mb-4 img-fluid" /></Link>
      </div>
      <div className="col-sm-2 col1 showcase_card align-self-center">
        <Link to={``}><img src="./images/dummy_logo2.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo1.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo3.png" alt="" className="mb-4 img-fluid" /></Link>
      </div>
      <div className="col-sm-2 col1 showcase_card align-self-center">
        <Link to={``}><img src="./images/dummy_logo3.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo2.png" alt="" className="mb-4 img-fluid" /></Link>
        <Link to={``}><img src="./images/dummy_logo1.png" alt="" className="mb-4 img-fluid" /></Link>
      </div>

    </div>
  </div>
</section>
{/* <!-- bradn section end --> */}




{/*Testimonala   */}
<Testimonial />
{/* Testimoanla ends */}








     
      
    </div>
  );
}
