import React from "react";


export default function About() {
  return (
    <div>
  
      {/* our journey */}
      <div className="container pt-5 mt-5 ">
        <div className="row mt-5 ">
          <h3 className="text-center fw-bold mb-5">
            Our Incredibale Journey
            <span className="ms-4">
              <i class="fas fa-road"></i>
            </span>{" "}
          </h3>
          <div className="col-md-4 ">
            <div className="card shadow-lg rounded  ">
              <div className="card-body text-center">
                <h3 className="fw-bold"> Year : 2011</h3>
                <p className="fw-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  voluptatum accusantium corporis et eveniet commodi rerum
                  officia hic incidunt, ullam dolor eaque vel animi veniam,
                  voluptatem ex dignissimos, unde praesentium.
                </p>
                <p className="fw-bold">Market Share : 20%</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card shadow-lg rounded   ">
              <div className="card-body text-center">
                <h3 className="fw-bold"> Year : 2015</h3>
                <p className="fw-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  voluptatum accusantium corporis et eveniet commodi rerum
                  officia hic incidunt, ullam dolor eaque vel animi veniam,
                  voluptatem ex dignissimos, unde praesentium.
                </p>
                <p className="fw-bold">Market Share : 46%</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card shadow-lg rounded   ">
              <div className="card-body text-center">
                <h3 className="fw-bold"> Year : 2021</h3>
                <p className="fw-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  voluptatum accusantium corporis et eveniet commodi rerum
                  officia hic incidunt, ullam dolor eaque vel animi veniam,
                  voluptatem ex dignissimos, unde praesentium.
                </p>
                <p className="fw-bold">Market Share : 76%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our journey ends */}












      {/* about section */}
      <section id="about" class="about_wrapper">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-lg-5 text-center text-lg-start">
              <p class="about_number">1</p>
              <p class="about_title">
                showcase your brand beautifully with our service
              </p>
              <p class="about_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                iusto tempore repellat, iste voluptatibus, quia soluta error vel
                voluptate blanditiis maiores minus! Sed dolores nobis et maiores
                porro in cum maiores minus! Sed dolores nobis et maiores porro
                in cum!
              </p>
              <div class="learn-more-btn" href="#">
                find out more{" "}
              </div>
            </div>
            <div class="col-sm-12 col-lg-7 text-center text-md-start">
              <img src="./images/commerce.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>

        <div class="innovate mt-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-lg-6 text-center text-md-start">
                <img src="./images/innovation.png" alt="" class="img-fluid" />
              </div>
              <div class="col-sm-12 col-lg-6 text-center text-lg-start">
                <p class="about_number">2</p>
                <p class="about_title">
                  The best digialmarkeing company we understand your needs
                </p>
                <p class="about_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, iusto tempore repellat, iste voluptatibus, quia soluta
                  error vel voluptate blanditiis maiores minus! Sed dolores
                  nobis et maiores porro in cum maiores minus! Sed dolores nobis
                  et maiores porro in cum!
                </p>
                <div class="learn-more-btn btn-header" href="#">
                  Learn MOre
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* abput section endsends */}











    </div>
  );
}
