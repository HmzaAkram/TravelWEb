import React from "react";
import img from '../../public/assets/images/slider3.jpg';
import About_usCss from "./about.module.css";
import Banner from "./Banner";

function About() {
  return (
    <>
      <div className={About_usCss.aboutSection}>
        <div className="container"> {/* Use Bootstrap's container */}
          <div className="row align-items-center"> {/* Row with vertically centered content */}
            
            {/* Column for the image */}
            <div className="col-lg-6 col-md-12"> {/* Full width on mobile, 6 columns on larger screens */}
              <img src={img} alt="About Us" className="img-fluid" /> {/* img-fluid makes the image responsive */}
            </div>

            {/* Column for the content */}
            <div className="col-lg-6 col-md-12"> {/* Full width on mobile, 6 columns on larger screens */}
              <div className={About_usCss.content_parent}>
                <div className={About_usCss.head}>
                  <h1>About Us</h1>
                </div>
                <h5>
                  Trip Planner is dedicated to helping you create travel experiences that truly reflect your personal preferences. 
                  Our team of travel experts is passionate about transforming your journeys into unforgettable and seamless adventures.
                </h5>
                <h5>
                  We offer a wide range of services, including custom trip planning, curated itineraries, virtual trip consultations, and travel recommendations. 
                  Whether you're looking to explore new destinations or simply relax at a favorite getaway, we have the expertise to bring your vision to life. 
                </h5>
                <h5>
                  <br />
                  Our mission is to create journeys that are not only exciting but also well-organized and meaningful. 
                  We listen to your needs and preferences, ensuring every trip exceeds your expectations.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </>
  );
}

export default About;
