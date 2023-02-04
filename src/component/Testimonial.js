import React from "react";

export default function Testimonial() {
  return (
    <div>
      <section id="testimonial">
        <div className="wrapper testimonial-section">
          <div className="container text-center mb-5">
            <div className="text-center pb-2 mt-4">
              <h2 className="fw-bold">Testimonial</h2>
            </div>

            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>

                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="carousel-caption d-none d-md-block">
                        <img src="./images/e2.jfif" />
                        <h5>John Martin</h5>
                        <p>
                      
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Omnis repudiandae esse rerum, quis quos ullam
                          cum, sapiente vero aperiam modi, asperiores molestias
                          illum! Quia, earum dolorum? Officiis fugit nam vitae.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="carousel-caption d-none d-md-block">
                        <img src="./images/e3.jpg" />
                        <h5>Peter Holand</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum quasi natus consequatur, nulla maxime
                          dolore eaque facilis iure quidem qui minus magni
                          tempore optio veritatis iste mollitia necessitatibus
                          ipsam dolores?
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="carousel-caption d-none d-md-block">
                        <img src="./images/e2.jfif" />
                        <h5>Ront Star</h5>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tenetur quidem fuga voluptatibus eum enim soluta
                          in officiis maiores ipsum! Quibusdam optio commodi
                          quae voluptas. Modi iusto possimus ipsam rem debitis!
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
