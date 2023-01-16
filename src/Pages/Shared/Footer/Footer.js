import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footer from "../../../img/images/footer.png";

const Footer = () => {
    const year = new Date();
    const month = year.getFullYear();
    return (

        <footer className="mt-5 p-10" style={{
            background: `url(${footer})`,
            backgroundSize: "cover"
        }}>
            <div className="footer">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className="mt-32">
                <p>Copyright © {month} - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>

    );
};

export default Footer;