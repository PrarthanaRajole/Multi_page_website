import React from "react";
import music from './music.jpg';

function Home() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <div>
	          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music}
              alt=""
            />
          </div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
            Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm or otherwise expressive content.
            Music is the pleasing sound created by voices or instruments following some tonal structure.
            Characteristics of music include: sound, melody, harmony, rhythm or the driving beats in a measure or section of music, structure or form, texture, and expression. Music is made or created by using sound from human voices or instruments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
