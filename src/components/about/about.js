import React from "react";
import music1 from './music1.jpg';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <div>
	          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music1}
              alt=""
            />
          </div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            A music store or musical instrument store is a retail business that sells musical instruments and 
            related equipment and accessories. Some music stores sell additional services, such as music lessons, 
            music instrument or equipment rental, or repair services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
