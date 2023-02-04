import React from 'react'


export default function Faq() {
    return (
        <div>
      
            {/* <!-- faq section --> */}
<section id="faqs" className="faq_wrapper">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <p className="faq_subtitle">we're here to help</p>
        <h2 className="faq_title">Frequently asked questions</h2>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12 col-lg-8 mb-5 mb-lg-0">
      {/* <!-- accordion --> */}
        <div className="accordion accordion_flush" id="accordionExample">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                How does the free tier work ?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore in blanditiis vel, ullam maiores perspiciatis deleniti quis magni delectus unde! Saepe voluptatem odio voluptate odit facilis, molestiae explicabo impedit provident?
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                what happen when my trial ends ?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente inventore veritatis asperiores est porro iure molestiae ratione adipisci sed velit officia libero perferendis laborum molestias explicabo, dicta corporis quam vero!
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How do i make payment ?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni placeat, repellendus eaque repudiandae ut ratione veritatis architecto rerum dolorem cum cupiditate vero aut optio! Consequuntur quae minima aliquid perferendis?
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                How do i get in touch with support ?
              </button>
            </h2>
            <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nulla quas asperiores aut quidem nesciunt laudantium, veniam, molestiae in ipsa dolorum perspiciatis itaque, doloribus earum? Numquam sapiente cumque molestias natus.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
              can i upgrade my plan any time ?
              </button>
            </h2>
            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo praesentium vero doloribus officiis molestiae assumenda. Fugit reiciendis sunt nemo eius in, voluptate itaque quam ab voluptas ea. Officiis, minus praesentium.
              </div>
            </div>
          </div>

        </div>
      
      </div>
 

    <div className="col-sm-12 col-lg-4">
      <img src="./images/faq.png" alt="" className="img-fluid"/>
    </div>
  </div>

</div>

{/* <!-- send message --> */}
<div className="free_trial">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-12 col-lg-6 text-center text-lg-start">
        <h2 className="free_title">Send us a message and we will get back to you ...</h2> 
      </div>

      <div className="col-sm-12 col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
        <a href="#contact" className="learn-more-btn"><i className="fa fa-rocket"></i> Send Message</a>

      </div>
    </div>
  </div>
</div>

   
         
      
</section>
{/* <!-- faq section ends --> */}
        </div>
    )
}
