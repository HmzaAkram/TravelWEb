import React from 'react';
import './Footer.css'; // Custom CSS for styling
import img1 from '../../public/Accommodation/AmmanRotana.jpg';
import img2 from '../../public/Accommodation/AtlanticHotel.jpg';
import img3 from '../../public/Accommodation/AvariLahore.jpg';
import img4 from '../../public/Accommodation/BayerischerHof.jpg';
import img5 from '../../public/Accommodation/BelmondHotelCipriani.jpg';
import img6 from '../../public/Accommodation/BurjAlArabJumeirah.jpg';
import logo from '../../public/assets/images/logo.png';




const Footer = () => {
  // Scroll to top button function
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block";
    } else {
      document.getElementById("movetop").style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.onscroll = scrollFunction;
  }, []);

  return (
    <footer className="w3l-footer-66">
      <section className="footer-inner-main">
        <div className="footer-hny-grids py-200">
          <div className="container py-lg-4">
            <div className="text-txt">
              <div className="right-side">
                <div className="row sub-columns">
                  <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                    <img src={logo} alt="Logo" style={{width: 200, height: 200}}/> 
                    <div className="columns-2">
                      <ul className="social">
                        <li><a href="#"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span className="fa fa-google-plus" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span className="fa fa-github" aria-hidden="true"></span></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 sub-one-left mid-footer-gd">
                    <div className="sub-two-right">
                      <h6>Quick links</h6>
                      <ul>
                        <li><a href="/"><span className="fa fa-angle-double-right mr-2"></span>Home</a></li>
                        <li><a href="/about"><span className="fa fa-angle-double-right mr-2"></span>About</a></li>
                        <li><a href="/Accommodations"><span className="fa fa-angle-double-right mr-2"></span>Accommodation</a></li>
                        <li><a href="/Destinations"><span className="fa fa-angle-double-right mr-2"></span>Destinations</a></li>
                        <li><a href="/contact"><span className="fa fa-angle-double-right mr-2"></span>Contact</a></li>
                      </ul>
                    </div>

                    <div className="sub-two-right">
                      <h6>Help & Support</h6>
                      <ul>
                        <li><a href="#"><span className="fa fa-angle-double-right mr-2"></span>Live Chart</a></li>
                        <li><a href="#"><span className="fa fa-angle-double-right mr-2"></span>Faq</a></li>
                        <li><a href="#"><span className="fa fa-angle-double-right mr-2"></span>Support</a></li>
                        <li><a href="#"><span className="fa fa-angle-double-right mr-2"></span>Terms of Services</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 sub-one-left">
                    <h6>Instagram Gallery</h6>
                    <div className="instagram-gallery">
                      <div className="b-img"><a href="#"><img src={img1} className="img-fluid" alt="gallery 1" /></a></div>
                      <div className="b-img"><a href="#"><img src={img2} className="img-fluid" alt="gallery 2" /></a></div>
                      <div className="b-img"><a href="#"><img src={img3} className="img-fluid" alt="gallery 3" /></a></div>
                      <div className="b-img"><a href="#"><img src={img4} className="img-fluid" alt="gallery 4" /></a></div>
                      <div className="b-img"><a href="#"><img src={img5} className="img-fluid" alt="gallery 5" /></a></div>
                      <div className="b-img"><a href="#"><img src={img6} className="img-fluid" alt="gallery 6" /></a></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="below-section">
          <div className="container">
            <div className="copyright-footer">
              <div className="columns text-lg-left">
                <p>© 2024 Trip. All rights reserved. Design by Trip Planner</p>
              </div>
              <ul className="columns text-lg-right">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Move to Top Button */}
        <button onClick={topFunction} id="movetop" title="Go to top">
          <span className="fa fa-arrow-up" aria-hidden="true"></span>
        </button>
      </section>
    </footer>
  );
};

export default Footer;
