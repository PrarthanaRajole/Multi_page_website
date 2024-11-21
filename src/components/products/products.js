import React from "react";
import music2 from './music2.png';
import music5 from './music5.jpg';
import music6 from './music6.jpg';
import music7 from './music7.jpg';
import music8 from './music8.jpg';

function Products() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <div>
	          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music2}
              alt=""
            />
          </div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Products</h1>
            <p>
            Instruments are classified using 5 different categories depending on the manner in which the instrument creates the sound:</p>
            <p>Idiophones, Membranophones, Chordophones, Aerophones, & Electrophones.</p>
            <div>
	          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music5}
              alt=""
            />
          </div>
            <p>
            The guitar is a fretted musical instrument that typically has six strings.
            </p>
            <div>
	          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music6}
              alt=""
            />
          </div>
            <p>
            Though there is no original standard configuration for drum kits, 
            drum kits have a five-piece set, including two tom-toms, a floor tom, a bass drum, and a snare drum.
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music7}
              alt=""
            />
          </div>
            <p>
            The saxophone is a type of single-reed woodwind instrument with a conical body, usually made of brass.
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music8}
              alt=""
            />
          </div>
            <p>
            The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material.
            </p>
          </div>
        </div>
  );
}

export default Products;
