import React from "react";
import music3 from './music3.png';

function Services() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <div>
	          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music3}
              alt=""
            />
          </div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Services</h1>
            <p>
            The 5 best free music services: Top streaming apps and radio picks
            <p>-Spotify Free. Best free music service overall. ...</p>
            <p>-Amazon Music. Best free music service for Prime customers. ...</p>
            <p>-YouTube Music. Best free music service for song lyrics. ...</p>
            <p>-Pandora. Best free music service for curated playlists. ...</p>
            <p>-iHeartRadio.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
