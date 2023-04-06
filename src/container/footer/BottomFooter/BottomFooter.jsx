import React from "react";
import "./BottomFooter.css";
import { images } from "../../../constants";

const BottomFooter = () => {
  return (
    <div className="app__bottomfooter">
      <div className="app__bottomfooter-container">
        <div className="app__bottomFooter-links">
          <div className="app__bottomFooter-links_div">
            <h4>About us</h4>
            <a href="#">Our story</a>
            <a href="#">Why us</a>
            <a href="#">How it works</a>
            <a href="#">FAQ</a>
          </div>
          <div className="app__bottomFooter-links_div">
            <h4>Our cabins</h4>
            <a href="#">North of London</a>
            <a href="#">Golden Hideaway</a>
            <a href="#">Oak Treehouse</a>
            <a href="#">Acacia Retreat</a>
            <a href="#">Blue Lagoon</a>
            <a href="#">South of London</a>
            <a href="#">Lavender Retreat</a>
            <a href="#">Butterfly Treehouse</a>
            <a href="#">Mahogany Hideaway</a>
          </div>
          <div className="app__bottomFooter-links_div">
            <h4>Get inspired</h4>
            <a href="#">Explore nature</a>
            <a href="#">Hiking trails</a>
            <a href="#">Swimming</a>
            <a href="#">Fishing</a>
            <a href="#">Boating</a>
            <a href="#">Cycling</a>
            <a href="#">Rest, relax and re-set</a>
            <a href="#">Spa treatments</a>
            <a href="#">Hot tubs</a>
            <a href="#">Nature Trails</a>
          </div>
          <div className="app__bottomFooter-links_div">
            <h4></h4>
            <a href="#" style={{ marginTop: "22px" }}>
              Great food and drink
            </a>
            <a href="#">Pubs</a>
            <a href="#">Restaurants</a>
            <a href="#">Food markets</a>
            <a href="#">Picnics</a>
            <a href="#">For you and yours</a>
            <a href="#">Solo or a couple</a>
            <a href="#">Pet friendly</a>
            <a href="#">Accessible cabins</a>
          </div>
          <div className="app__bottomFooter-links_div">
            <h4>Support</h4>
            <a href="#">Help</a>
            <a href="#">Contact us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Complaints Policy</a>
          </div>
        </div>
        <div className="app__bottomFooter-form">
          <h4>Sign up to our Newsletter</h4>
          <div className="app__bottomFooter-form_items">
            <p>
              For a weekly curated collection of 3 things you can watch, read or
              listen to switch off from the busy everyday.
            </p>
            <div className="app__bottomFooter-form_items-item">
              <form>
                <input type="email" placeholder="james@thegaintpeach.com" />
              </form>
              <button type="button">Join the mailing list</button>
            </div>
          </div>
        </div>
        <span></span>
        <div className="app__bottomFooter-social">
          <div className="app__bottomFooter-social_logo">
            <h1>UNWIND</h1>
            <h1>CABINS</h1>
          </div>
          <p>© 2023 UnwindCabins</p>
          <div className="app__bottomFooter-social_icons">
            <img src={images.linkedinIcon} alt="linkedinIcon" />
            <img src={images.twitterIcon} alt="twitterIcon" />
            <img src={images.facebookIcon} alt="facebookIcon" />
            <img src={images.instagramIcon} alt="instagramIcon" />
            <img src={images.youtubeIcon} alt="youtubeIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
