import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";

export default function CodeOfConduct() {

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

                    <p>Code of Conduct</p>

                    <span>
                        All users of AskResidenci are expected to adhere to the following guidelines to ensure a
                        professional and respectful environment.
                    </span>

                    <section>

                        <h5>1. Professionalism</h5>

                        <span>
                            Users must conduct themselves in a professional manner. This includes treating other users,
                            clients, and employees with respect and courtesy at all times.
                        </span>

                        <h5>2. Fair Use of Data</h5>

                        <span>
                            Users must ensure that the data they access and manage through the CRM app is used responsibly
                            and in compliance with legal and ethical guidelines. Misuse of client data will result in
                            immediate action.
                        </span>

                        <h5>3. Compliance with Local Laws</h5>

                        <span>
                            All users are required to comply with local, national, and international laws when using the
                            AskResidenci app. Violations will be reported to the appropriate authorities.
                        </span>

                        <h5>4. Data Security</h5>

                        <span>
                            Users are responsible for ensuring the security and confidentiality of any sensitive data
                            accessed through the app. Breaches of security will be treated seriously.
                        </span>

                        <h5>5. Disciplinary Actions</h5>

                        <span>
                            Violations of this Code of Conduct may result in warnings, account suspension, or termination,
                            depending on the severity of the offense.
                        </span>

                        <h5>6. Contact Us</h5>

                        <span>
                            For any questions or concerns regarding this Code of Conduct, please contact us at connect@askresidenci.com.
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
