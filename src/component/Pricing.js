import React from 'react'
import { Link } from 'react-router-dom'



export default function Pricing() {
    return (
        <div>
     
            {/* <!-- pricing section --> */}
<section id="pricing" className="price_wrapper">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <p className="pricing_subtitle">A plan for everyone</p>
        <h2 className="pricing_title">Choose  your pricing plan</h2>
      </div>
    </div>

    <div className="row align-items-center px-3 px-lg-0">

      <div className="col-sm-6 col-lg-4">
        <div className="pricing_card pricing_one">
          <p className="pricing_period">Personal</p>
          <img src="./images/personal.png" alt="" className="img-fluid" />
          <p className="pricing_rate">Free</p>
          <p className="pricing_text">Monthly</p>
          <div className="pricing_all_plan">
            <ul>
              <li>Unlimited Accounts</li>
              <li>syaytem Management</li>
              <li>database stattictics</li>
              <li><strike>Exportable Data</strike></li>
            </ul>
          </div>
          <Link to={`/contact`} className="learn-more-btn m-0">Get Started</Link>
        </div>
      </div>

      <div className="col-sm-6 col-lg-4 position-relative">
        <div className="pricing-ribbon"><span>Popular</span></div>
        <div className="pricing_card featured">
          <p className="pricing_period">Growth</p>
          <img src="./images/growth.png" alt="" className="img-fluid" />
          <p className="pricing_rate">$12.5</p>
          <p className="pricing_text">Monthly</p>
          <div className="pricing_all_plan">
            <ul>
              <li>Unlimited Accounts</li>
              <li>syaytem Management</li>
              <li>database stattictics</li>
              <li><strike>Exportable Data</strike></li>
            </ul>
          </div>
          <Link to={`/contact`} className="learn-more-btn btn-featured">Get Started</Link>
        </div>
      </div>

      <div className="col-sm-6 col-lg-4">
        <div className="pricing_card ">
          <p className="pricing_period">Profesional</p>
          <img src="./images/professional.png" alt="" className="img-fluid" />
          <p className="pricing_rate">$99</p>
          <p className="pricing_text">Monthly</p>
          <div className="pricing_all_plan">
            <ul>
              <li>Unlimited Accounts</li>
              <li>syaytem Management</li>
              <li>database stattictics</li>
              <li>Exportable Data</li>
            </ul>
          </div>
          <Link to={`/contact`} className="learn-more-btn m-0">Get Started</Link>
        </div>
      </div>

    </div>
  </div>

  {/* <!-- free triel --> */}
  <div className="free_trial">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-lg-6 text-center text-lg-start">
          <h2 className="free_title">Ready to get started now with our multipurpose landing page? </h2>
        </div>

        <div className="col-sm-12 col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
          <Link to={`/contact`} className="learn-more-btn"><i className="fa fa-rocket"></i> start a free trial</Link>

        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- pricng section end --> */}
</div>
     
    )
}

