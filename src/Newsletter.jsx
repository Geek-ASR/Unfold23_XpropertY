import React from "react";
import { Facebook, FacebookIcon, InstagramIcon, Linkedin, LinkedinIcon, TwitterIcon, icons } from "lucide-react";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Feedback</span>
                <span className="big-text">
                Your feedback helps us grow and improve. We value your input!
                </span>
                <div className="form">
                    <input type="text" placeholder="Enter Message" />
                    <button>Submit</button>
                </div>
                <span className="text">
                    Team SUS Bangalore
                </span>
                <span className="social-icons">
                    <div className="icon">
                    <InstagramIcon />
                    </div>
                    <div className="icon">
                    <FacebookIcon />
                    </div>
                    <div className="icon">
                    <TwitterIcon />
                    </div>
                    <div className="icon">
                    <LinkedinIcon />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
