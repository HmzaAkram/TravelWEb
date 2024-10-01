import React from 'react'
import './Banner.css';

function Banner() {
  return (
    <div>
      <section className="w3l-bottom-grids-6">
      <div className="bottom-grids-info py-5">
        <div className="container py-lg-5">
          <div className="row bottomnhy-grids">
            <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
              <div className="about-gd-inn">
                <span className="fa fa-globe icon-fea1" aria-hidden="true"></span>
                <h5><a href="/Destinations">Destinations</a></h5>
                <p>"Destinations hold the heart of every journey. They shape our experiences, broaden our perspectives, and create lasting memories.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
              <div className="about-gd-inn">
                <span className="fa fa-hotel icon-fea1" aria-hidden="true"></span>
                <h5><a href="/Accommodations">Accommodations</a></h5>
                <p>Accommodations are more than just a place to rest; they’re an essential part of the travel experience. From luxury hotels to cozy guesthouses, where we stay defines how we feel during our journey.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
              <div className="about-gd-inn">
                <span className="fa fa-plane icon-fea1" aria-hidden="true"></span>
                <h5><a href="/Transport">Transport</a></h5>
                <p>Transport is the lifeblood of travel. It’s how we connect with the world, turning distant places into reachable destinations.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
              <div className="about-gd-inn">
                <span className="fa fa-file-text-o icon-fea1" aria-hidden="true"></span>
                <h5><a href="/Luxury">Packages</a></h5>
                <p>Travel packages simplify the art of exploration, bringing together everything we need for a perfect trip accommodation, transport, and experiences in one seamless bundle. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner;
