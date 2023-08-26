import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useHistory } from "react-router-dom";
import '../css/Login.css';
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

function Login() {

    const [mobileNumber, setMobileNumber] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [otp, setOTP] = useState('');
    const [formResponse, setFormResponse] = useState('');
    const [showOTP, setShowOTP] = useState(null);
    const [showDetails, setShowDetails] = useState(null);
    
    useEffect(() => { 
        localStorage.setItem("Username",JSON.stringify(mobileNumber))
        localStorage.setItem("name",JSON.stringify(name))
        localStorage.setItem("email",JSON.stringify(email))
    });
  
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        axios.post('http://localhost/api/login.php', formData)
        .then(response => {
            setFormResponse(response.data.message);
            // setShowOTP(true);
            setShowDetails(true);
        })
        .catch(error => {
            console.error(error);
            setFormResponse('Error sending OTP');
        });
    };
    const handleUpdate = (event) => {
        event.preventDefault();
    
        axios.post(`http://localhost/api/update.php?name=${name}&email=${email}&mobileNumber=${mobileNumber}`)
        .then(response => {
            setFormResponse(response.data.message);
            // setShowOTP(true);
            setShowOTP(true);
        })
        .catch(error => {
            console.error(error);
            setFormResponse('Error sending OTP');
        });
    };

    const navigate = useNavigate();
    const handleOTPVerification = (event) => {
        event.preventDefault();
    
        const url = `http://localhost/api/verify_otp.php?mobile_number=${mobileNumber}&otp=${otp}`;

        axios
            .post(url)
        .then(response => {
            if (response.data.success) {
                setFormResponse('OTP verification successful');
                // Perform further actions like redirecting to a logged-in page
                navigate('/');
            } else {
                setFormResponse('Invalid OTP');
            }
        })
        .catch(error => {
            console.error(error);
            setFormResponse('Error verifying OTP');
        });
    };
    
    return (
        <>
            <div className="Main">
                <div className="NavbarRow">
                    <Link to="/" className="logoDiv">
                        <img src="/logo/logo (8).png" alt="Logo" className="img1" style={{ marginTop: 50, width: '250px',height: '50px', }}/>
                    </Link>
                </div>
            </div>
            <div className="topBg">
                <img src="https://www.squareyards.com/assets/images/login-desktop-bg.png" alt="" className="img-responsive desktop" />
            </div>
            <div className="loginBox">
                <div className="container">

                        <div>
                            {showOTP ? (
                                <div className="formBox" id="otp_box">
                                    <div className="headingBox">
                                        <h2>Confirm OTP to Continue</h2>
                                    </div>
                                    <span style={{ color: '#333', fontSize: '13px' }}>We have sent you sms with 4 digit verification code (OTP) on</span>
                                    <br/>
                                    <span className="mobile">{mobileNumber} <a>Change </a></span>
                                    <figure>
                                        <img src="https://www.squareyards.com/assets/images/user-interface.svg" className="img-responsive" alt="user interface" />
                                    </figure>
                                    <form onSubmit={handleOTPVerification} style={{ marginTop: '1rem', }}>
                                        <input autoComplete="false" name="hidden" type="hidden" />
                                        <div className="form-group">
                                            <div className="input-group countryDropdownPosition">
                                            <input
                                                type="text"
                                                value={otp}
                                                onChange={event => setOTP(event.target.value)}
                                                placeholder="OTP"
                                            />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary" id="send_otp_btn">
                                                Confirm OTP <em className="icon-angle-right"></em>
                                            </button>
                                        </div>
                                    </form>
                                    <p>Resend OTP <a>Resend </a></p>
                                </div>
                            ) : (
                                <div className="formBox" id="login_password_box">
                                    <div className="headingBox">
                                        <h2>Login to Continue</h2>
                                    </div>
                                    <figure>
                                        <img src="https://www.squareyards.com/assets/images/user-interface.svg" className="img-responsive" alt="user interface" />
                                    </figure>
                                    <form onSubmit={showDetails ? handleUpdate : handleSubmit} method="post">
                                        <input autoComplete="false" name="hidden" type="hidden" />
                                        <div className="form-group">
                                            <div className="input-group countryDropdownPosition">
                                            {showDetails ? 'handleUpdate' : 'handleSubmit'}
                                                {/* <PhoneInput
                                                    country={"in"}
                                                    value={mobileNumber}
                                                    onChange={setMobileNumber}
                                                /> */}
                                                <input
                                                    type="text"
                                                    value={mobileNumber}
                                                    name="mobile_number"
                                                    onChange={event => setMobileNumber(event.target.value)}
                                                    placeholder="Mobile Number"
                                                />
                                                <input
                                                    type="text"
                                                    value={name}
                                                    name="name"
                                                    onChange={event => setName(event.target.value)}
                                                    placeholder="Enter Name"
                                                    style={{display: showDetails === true ? 'block' : 'none'}}
                                                />
                                                <input
                                                    type="text"
                                                    value={email}
                                                    name="email"
                                                    onChange={event => setEmail(event.target.value)}
                                                    placeholder="Enter Email"
                                                    style={{display: showDetails === true ? 'block' : 'none'}}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary" id="send_otp_btn">
                                                Proceed to Login <em className="icon-angle-right"></em>
                                            </button>
                                        </div>
                                    </form>
                                    <p>Don’t Have an Account Yet? <a href="https://www.squareyards.com/user/signup">Register Here. </a></p>
                                </div>
                            )}
                        </div>

                </div>
            </div>
        </>
    )
}

export default Login