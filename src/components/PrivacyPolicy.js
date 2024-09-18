import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
import Footer from "./Footer";
import { Typography, Box } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";

export default function PrivacyPolicy() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    let location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <>

            <div className="navbar1">
                <div className="container">
                    <div to="" className="logoDiv">
                        <img src="/logo/logo (3).png" alt="Logo" className="img2" />
                    </div>
                    <div className="menu-icon">
                        <IconButton onClick={toggleSidebar}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            
            <div className="main">
                <div className={`left ${isSidebarOpen ? 'open' : ''}`}>
                    <div
                        style={{
                            position: 'sticky',
                            top: "70px",
                        }}
                    >
                        <div className="link">
                            <Link to="/policies/privacy"><h3 className={location.pathname==="/policies/privacy" ? "active" : "" } >Privacy Policy</h3></Link>
                        </div>
                        <div className="link">
                            <Link to="/policies/terms-of-service"><h3 className={location.pathname==="/policies/terms-of-service" ? "active" : "" } >Terms of Service</h3></Link>
                        </div>
                        <div className="link">
                            <Link to="/policies/code-of-conduct"><h3 className={location.pathname==="/policies/code-of-conduct" ? "active" : "" } >Code of Conduct</h3></Link>
                        </div>
                    </div>
                </div>
                <div className="center">

                    <p>Privacy Policy</p>

                    <span>
                        At AskResidenci, we respect your privacy and are committed to protecting it through compliance
                        with this policy. This Privacy Policy describes the types of information we may collect from you
                        and how we use it.
                    </span>

                    <section>

                        <h5>1. Information We Collect</h5>

                        <span>
                            We collect personal data such as name, email, phone number, RERA number, location (city and
                            locality), and information related to your use of our CRM services. We may also collect
                            geolocation data through employee attendance tracking.
                        </span>

                        <h5>2. How We Use Your Information</h5>

                        <span style={{ marginBottom: "15px" }} >
                            The data we collect is used to:
                        </span>
                        <ul>
                            <li>Manage your account and CRM-related services.</li>
                            <li>Track employee attendance with live location and selfies.</li>
                            <li>Provide real-time dashboards for performance monitoring.</li>
                            <li>Improve our app and services based on user behavior.</li>
                        </ul>

                        <h5>3. Data Sharing</h5>

                        <span>
                            We do not share personal information with third parties except when necessary to operate our
                            services or when required by law. We may share data with trusted service providers for hosting
                            or analytics purposes.
                        </span>

                        <h5>4. Cookies and Tracking Technologies</h5>

                        <span>
                            We may use cookies, web beacons, and other tracking technologies to collect information about
                            your browsing activities to improve user experience and monitor the performance of our app.
                        </span>

                        <h5>5. Data Retention</h5>

                        <span>
                            We retain personal information as long as necessary to provide our services and fulfill our
                            legal obligations. Once the data is no longer required, we securely delete or anonymize it.
                        </span>

                        <h5>6. Your Rights</h5>

                        <span>
                            You have the right to access, correct, or delete your personal data. You can exercise these
                            rights by contacting us at connect@askresidenci.com.
                        </span>

                        <h5>7. Changes to This Policy</h5>

                        <span>
                            We may update this Privacy Policy periodically. Please check this page for any changes. Your
                            continued use of our app after any changes signifies acceptance of those changes.
                        </span>

                        <h5>8. Contact Us</h5>

                        <span>
                        If you have any questions about our Privacy Policy, please contact us at connect@askresidenci.com.
                        </span>

                    </section>
                    
                </div>
                <div className="right">
                    
                </div>
            </div>

            {/* <Footer/> */}
        </>
    )
}
