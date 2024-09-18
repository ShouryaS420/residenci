import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function TermsOfServices() {

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

                    <p>Terms of Service</p>

                    <span>
                        Welcome to AskResidenci! By using our real estate CRM app, you agree to abide by the following
                        Terms of Service. Please read these terms carefully.
                    </span>

                    <section>

                        <h5 id="services-provided" className="section" >1. Services Provided</h5>

                        <span>
                            AskResidenci offers services including lead management, team management, sales pipelines, site
                            visits, employee attendance tracking, and live dashboard performance monitoring.
                        </span>

                        <h5 id="account-registration" className="section" >2. Account Registration</h5>

                        <span>
                            Users must register an account to access the CRM services. Users are responsible for maintaining
                            the confidentiality of their login credentials. Providing false or misleading information during
                            registration is prohibited.
                        </span>

                        <h5 id="user-conduct" className="section" >3. User Conduct</h5>

                        <span>
                            Users are responsible for all activities performed under their account. Harassment, abuse, or
                            violation of legal rights is strictly prohibited. Users must not upload false information or
                            engage in fraudulent activities.
                        </span>

                        <h5 id="service-modification" className="section" >4. Service Modifications</h5>

                        <span>
                            AskResidenci reserves the right to modify or discontinue services (temporarily or permanently)
                            with or without notice. We are not liable for any changes to the services.
                        </span>

                        <h5 id="payment" className="section" >5. Payments</h5>

                        <span>
                            If applicable, users agree to pay any fees associated with the CRM services. Payments must be
                            made in accordance with the terms provided at the time of payment.
                        </span>

                        <h5 id="termination-of-account" className="section" >6. Termination of Account</h5>

                        <span>
                            We reserve the right to suspend or terminate your account for violations of these Terms of
                            Service. Users may also request account termination at any time.
                        </span>

                        <h5 id="limitation-of-liability" className="section" >7. Limitation of Liability</h5>

                        <span>
                            AskResidenci is not liable for any indirect, incidental, special, or consequential damages
                            arising out of or related to the use of our services.
                        </span>

                        <h5 id="governing-law" className="section" >8. Governing Law</h5>

                        <span>
                            These Terms of Service are governed by the laws of [Your Jurisdiction]. Any disputes arising from
                            these terms will be handled in accordance with these laws.
                        </span>

                        <h5 id="contact" className="section" >9. Contact Us</h5>

                        <span>
                            For any questions about these Terms of Service, please contact us at connect@askresidenci.com.
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
