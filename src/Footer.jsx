import React from "react";
import "./Footer.scss";
import { icons } from "lucide-react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Team SUS from Unfold@23 is glad they got the opportunity
                    to be part of such an awesome event. The best part was definitely the food.
                    Getting connected to other tech enthusiasts especially from web3 domain made the event 
                    not saturated over just hackathone but also on community build up. In past 3 days we learnt 
                    a lot while having fun! 

                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <locate />
                        <div className="text">
                            D. Y. Patil Institute of Technology, Pimpri, Pune.
                        </div>
                    </div>
                    <div className="c-item">
                        <locate/>
                        <div className="text">Phone: 8446586979 </div>
                    </div>
                    <div className="c-item">
                        <locate />
                        <div className="text">Email: adityarekhe1030@gmail.com </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Features</div>
                    <span className="text">Enhanced Security </span>
                    <span className="text">Smart Contract Integration</span>
                    <span className="text">Secure Property Listing and Transfer</span>
                    <span className="text">Transparent Escrow Services</span>
                    <span className="text">Efficient Inspection</span>
                    <span className="text">Reliable Payment Handling</span>

                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">Connect wallet</span>
                    <span className="text">buy home</span>
                    <span className="text">sell home</span>
                    <span className="text">rent home</span>
                    <span className="text">About</span>
                </div>
            </div>
            {/* <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Genesys256 CREATED BY DIT PIMPRI STUDENTS - Team Genesys256.
                    </span>
                    <img src={Payment} />
                </div>
            </div> */}
        </div>
    );
};

export default Footer;