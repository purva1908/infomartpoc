import React from "react";

function Review() {
  return (
    <div className="testimonials">
              <div id="testimonial-carousel" className="carousel slide" data-ride="true" >     <div className="carousel-inner">
      <div className="carousel-item active">
        <h3 className="testimonial-text">You always get notified through infoMArt app if any sale is on and
              you can avail the discounted products at their app. Refer to
              attached photo which I bought few months back and recieved a very
              good discount on it. Happy Shopping !</h3>
        <img className="testimonial-image" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13581134/2021/11/18/77d98e7f-75f2-4dcf-bea2-443a837e95b71637229080165-SASSAFRAS-Dusty-Pink-Self-Design-Dobby-Weave-Wrap-Dress--Bel-1.jpg" alt="dog-profile"/>
        <em>Pebbles, New York</em>
    </div>

    <div className="carousel-item " >
      <h3 className="testimonial-text"> Good online shop for buying clothes. Large selection of branded
              items. All items are original and of good quality. Fast delivery.
              I received my package 3 days after ordering </h3>
      <img className="testimonial-image" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12384822/2020/9/1/29a3ab27-c709-476e-bf2e-3c1384983b9d1598947696483KottyWomenBlackWideLegJeans6.jpg" alt="lady-profile"/>
      <em>Beverly, Illinois</em> 
    </div>
    </div>

    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>

    <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>

    </div>
            
    </div>
  );
}
export default Review;
