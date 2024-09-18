import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/Navbar2.css';
import axios from "axios";
import { Autocomplete } from "@mui/material";
import { TextField } from '@mui/material';

function Navbar() {

    const [fix, setFix] = useState(false);
    
    function setFixed() {
        if (window.scrollY >= 392) {
            setFix(true);
        } else {
            setFix(false);
        }
    }
    
    window.addEventListener("scroll", setFixed);
    
    const [showHide, setShowHide] = useState(false);
    const showHideSideBar = (e) => {
        if (showHide >= false) {
            // alert('yes');
            setShowHide(true);
        }
        if (showHide >= true) {
            // alert('yes');
            setShowHide(false);
        }
    }
    const closeSlider = () => {
        setShowHide(false);
    }

    const [dropdown, setDropdown] = useState(false)
    const showDropdown = () => {
        if (dropdown >= false) {
            // alert('yes');
            setDropdown(true);
        }
        if (dropdown >= true) {
            // alert('yes');
            setDropdown(false);
        }
    }

    const number = localStorage.getItem("Username");
    const userName = localStorage.getItem("name");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://askresidenci.com/convert.php?number=${number}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, [number]);

    const [formResponse, setFormResponse] = useState('');
    const handleUpdate = (event) => {
        event.preventDefault();
    
        const url = `https://askresidenci.com/logout.php?number=${number}`;

        axios
            .post(url)
        .then(response => {
            if (response.data.success) {
                setFormResponse('Logout Successfull');
                // Perform further actions like redirecting to a logged-in page
                window.location.reload();
            } else {
                setFormResponse('Logout Failed');
            }
        })
        .catch(error => {
            console.error(error);
            setFormResponse('Error verifying OTP');
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://askresidenci.com/logout.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `number=${number}`,
          });
    
          const responseData = await response.text();
          setFormResponse(responseData);
        } catch (error) {
          console.error(error);
        }
    };

    
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:5000/api/projects/api/count', {
                    params: { fieldName: 'save', fieldValue: 'yes' },
                });
        
                const count = response.data.count;
                setCount(count);
            } catch (err) {
                console.error(err);
            }
        }
      
        fetchData();
    }, []);

    const [value1, setValue1] = useState('');
    const [open, setOpen] = useState(false);
    const [myOptions, setMyOptions] = useState([]);
  
    const handleOptionSelect = (event, newValue) => {
        setValue1(newValue);
        setOpen(false);

        // fetch data
        fetch("http://localhost:5000/api/projects/fetchDetailsBySearchLocality")
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            for (var i = 0; i < res.length; i++) {
                if (!myOptions.some((obj) => obj.label == res[i].name)) {
                    
                    // create an object with a label
                    let object = {
                        label: res[i].locality,
                        locality: res[i].locality,
                    };
                    myOptions.push(object);
                }
            }
            setMyOptions(myOptions);
        });
    };

    useEffect(() => handleOptionSelect(), [myOptions]);

    return (
        <>
            {/* {number} */}
            <div className={fix ? 'navbar fixed': 'navbar'}>
                <div className="container2">
                    <div className="NavbarRow">
                        <Link to="/" className="logoDiv">
                            {fix === true ? (
                                <img src="/logo/logo (6).png" alt="Logo" className="img1"/>
                            ) : (
                                <img src="/logo/logo (8).png" alt="Logo" className="img2"/>
                            )}
                        </Link>
                        <div>
                            <form className="search-form">
                                {/* <input id="autoComplete__home" type="text" className="autoCompleteDesktop__searchBox autoCompleteDesktop__searchBox--home autoCompleteDesktop__searchBox--nearbyVisible" placeholder="Search by city, hotel, or neighborhood" autoComplete="off" required=""/> */}
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <Autocomplete
                                        // autoComplete
                                        // autoHighlight
                                        freeSolo
                                        className="" 
                                        open={open}
                                        onOpen={() => {
                                            setOpen(true);
                                        }}
                                        onClose={() => {
                                            setOpen(false);
                                        }}
                                        value={value1}
                                        onChange={handleOptionSelect}
                                        options={['Wakad', 'Baner', 'Wagholi', 'Kharadi', 'Hinjewadi', 'Hadapsar', 'Balewadi']}
                                        renderInput={params => (
                                            <TextField {...params} label="Search by Locality ex:- Wakad, Baner, Balewadi" />
                                        )}
                                    />
                                    <Link to={`/search-details/${value1}`}>
                                        <button type="button" className="search-button" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                <path style={{ fill: '#ffffff' }} d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="NavbarRow">
                        <div className="tfp-cell headerPrimary__rightHeader">
                            <Link to="/broker-next" target="_blank" className="promoCard">
                                <div className="promoCard__card promoCard__card--cta">
                                    <div className="promoCard__contentWrapper">
                                        <div className="promoCard__text d-text14 is-fontBold">
                                            {fix === true ? (
                                                <img src="/logo/logo2 (3).png" alt="Broker Next" style={{ width: '17vh', }} />
                                            ) : (
                                                <img src="/logo/logo2 (1).png" alt="Broker Next" style={{ width: '17vh', }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="promoCard" data-cms-id="61129" data-cms-template="cWeb-Properties">
                                <div className="promoCard__card promoCard__card--cta">
                                <div className="homeConstruction">
                                    <img src="/homeConstruction.png" alt="" className="" />
                                </div>
                                <div className="promoCard__contentWrapper">
                                    <div className="promoCard__text d-text14 is-fontBold">
                                    <span className="">Home Constructions</span>
                                    </div>
                                </div>
                                </div>
                            </Link>
                            {data.slice(0, 1).map((item, index) => {
                                if (item.login === 'yes') {
                                    return (
                                        <>
                                            <div className="dropdown">
                                                <Link className="sideMenuAuthButton sideMenuAuthButton--headerPrimary">
                                                    <div className="sideMenuAuthButton__btnWrap">
                                                        <div className="userIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="sideMenuAuthButton__contentWrapper">
                                                            <div className="sideMenuAuthButton__text">{userName}</div>
                                                            <svg class="transform -rotate-90" viewBox="0 0 24 24" color="#999" height="13" width="13" style={{ width: '13px', height: '13px', margin: '2px', transform: 'rotate(270deg)', marginTop: '5px', marginLeft: '4px', }}>
                                                                <path class="" fill="#fff" d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div class="dropdown-content">
                                                    <a href="#">Profile</a>
                                                    <Link to="/short-listed/projects">Short Listing ({count}) </Link>
                                                    <a> <button onClick={handleUpdate}>Sign Out</button> </a>
                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                                if (item.login === 'no') {
                                    return (
                                        <>
                                            <Link to="/login" className="sideMenuAuthButton sideMenuAuthButton--headerPrimary">
                                                <div className="sideMenuAuthButton__btnWrap">
                                                    <div className="userIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                            <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="sideMenuAuthButton__contentWrapper">
                                                        <div className="sideMenuAuthButton__text">Login / Signup</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                }
                            })}
                        </div>
                        <button className="barIcon" onClick={showHideSideBar}>
                            {fix ? (
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path style={{fill: '#000000'}} d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            ):(
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path style={{fill: '#ffffff'}} d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="label"></div>
            </div>
            <div className={showHide ? 'rightToLeft-slide show' : 'rightToLeft-slide'}>
                <div className="close" onClick={closeSlider}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path style={{ fill: '#000000' }} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <ul className='rightoLeftBar'>
                    <li style={{ display: showHide ? 'block' : 'none' }}>
                        <Link to="/broker-next" target="_blank" className="promoCard">
                            <div className="promoCard__card promoCard__card--cta">
                                <div className="promoCard__contentWrapper">
                                    <div className="promoCard__text d-text14 is-fontBold">
                                        <img src="/logo/logo2 (3).png" alt="Broker Next" style={{ width: '9rem', marginTop: '16px', marginLeft: '-29px', }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li style={{ display: showHide ? 'block' : 'none' }}>
                        {/* <Link to="/" className="promoCard" data-cms-id="61129" data-cms-template="cWeb-Properties">
                            <div className="promoCard__card promoCard__card--cta">
                                <div className="homeConstruction">
                                    <img src="/homeConstruction.png" alt="" className="" />
                                </div>
                                <div className="promoCard__contentWrapper">
                                    <div className="promoCard__text d-text14 is-fontBold">
                                    <span className="">Home Constructions</span>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                    </li>
                    <li style={{ display: showHide ? 'block' : 'none' }}>
                        {data.slice(0, 1).map((item, index) => {
                            if (item.login === 'yes') {
                                return (
                                    <>
                                        <div className="dropdown" onClick={showDropdown}>
                                            <Link className="sideMenuAuthButton sideMenuAuthButton--headerPrimary">
                                                <div className="sideMenuAuthButton__btnWrap">
                                                    <div className="userIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                            <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="sideMenuAuthButton__contentWrapper">
                                                        <div className="sideMenuAuthButton__text">{userName}</div>
                                                        <svg class="chevron-down" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                            <path style={{fill: '#000000'}} d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div class={dropdown ? "dropdown-content show" : "dropdown-content"}>
                                                <a href="#">Profile</a>
                                                <Link to="/short-listed/projects">Short Listing ({count}) </Link>
                                                <a> <button onClick={handleUpdate}>Sign Out</button> </a>
                                            </div>
                                        </div>
                                    </>
                                );
                            }
                            if (item.login === 'no') {
                                return (
                                    <>
                                        <Link to="/login" className="sideMenuAuthButton sideMenuAuthButton--headerPrimary">
                                            <div className="sideMenuAuthButton__btnWrap">
                                                <div className="userIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                                    </svg>
                                                </div>
                                                <div className="sideMenuAuthButton__contentWrapper">
                                                    <div className="sideMenuAuthButton__text">Login / Signup</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                );
                            }
                        })}
                    </li>
                </ul>
            </div>
            {/* {number} */}
            {/* <div className={fix ? 'navbar fixed': 'navbar'}>
                <div className="container2">
                    <div className="NavbarRow">
                        <Link to="/" className="logoDiv">
                            {fix === true ? (
                                <img src="/logo/logo (6).png" alt="Logo" className="img1"/>
                            ) : (
                                <img src="/logo/logo (8).png" alt="Logo" className="img2"/>
                            )}
                        </Link>
                        <div>
                            <form className="search-form">
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <Autocomplete
                                        // autoComplete
                                        // autoHighlight
                                        freeSolo
                                        className="" 
                                        open={open}
                                        onOpen={() => {
                                            setOpen(true);
                                        }}
                                        onClose={() => {
                                            setOpen(false);
                                        }}
                                        value={value1}
                                        onChange={handleOptionSelect}
                                        options={['Wakad', 'Baner', 'Wagholi', 'Kharadi', 'Hinjewadi', 'Hadapsar', 'Balewadi']}
                                        renderInput={params => (
                                            <TextField {...params} label="Search by Locality ex:- Wakad, Baner, Balewadi" />
                                        )}
                                    />
                                    <Link to={`/search-details/${value1}`}>
                                        <button type="button" className="search-button" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                <path style={{ fill: '#ffffff' }} d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="NavbarRow">
                        <div className="tfp-cell headerPrimary__rightHeader">
                            <Link to="/broker-next" target="_blank" className="promoCard">
                                <div className="promoCard__card promoCard__card--cta">
                                    <div className="promoCard__contentWrapper">
                                        <div className="promoCard__text d-text14 is-fontBold">
                                            {fix === true ? (
                                                <img src="/logo/logo2 (3).png" alt="Broker Next" style={{ width: '17vh', }} />
                                            ) : (
                                                <img src="/logo/logo2 (1).png" alt="Broker Next" style={{ width: '17vh', }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="promoCard" data-cms-id="61129" data-cms-template="cWeb-Properties">
                                <div className="promoCard__card promoCard__card--cta">
                                <div className="homeConstruction">
                                    <img src="/homeConstruction.png" alt="" className="" />
                                </div>
                                <div className="promoCard__contentWrapper">
                                    <div className="promoCard__text d-text14 is-fontBold">
                                    <span className="">Home Constructions</span>
                                    </div>
                                </div>
                                </div>
                            </Link>
                            {data.slice(0, 1).map((item, index) => {
                                if (item.login === 'yes') {
                                    return (
                                        <>
                                            <div className="dropdown">
                                                <Link className="sideMenuAuthButton sideMenuAuthButton--headerPrimary">
                                                    <div className="sideMenuAuthButton__btnWrap">
                                                        <div className="userIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="sideMenuAuthButton__contentWrapper">
                                                            <div className="sideMenuAuthButton__text">{userName.slice(1,-1)}</div>
                                                            <svg class="transform -rotate-90" viewBox="0 0 24 24" color="#999" height="13" width="13" style={{ width: '13px', height: '13px', margin: '2px', transform: 'rotate(270deg)', marginTop: '5px', marginLeft: '4px', }}>
                                                                <path class="" fill="#fff" d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div class="dropdown-content">
                                                    <a href="#">Profile</a>
                                                    <Link to="/short-listed/projects">Short Listing ({count}) </Link>
                                                    <a> <button onClick={handleUpdate}>Sign Out</button> </a>
                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                                if (item.login === 'no') {
                                    return (
                                        <>
                                            <Link to="/login" className="sideMenuAuthButton sideMenuAuthButton--headerPrimary">
                                                <div className="sideMenuAuthButton__btnWrap">
                                                    <div className="userIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                            <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="sideMenuAuthButton__contentWrapper">
                                                        <div className="sideMenuAuthButton__text">Login / Signup</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                }
                            })}
                        </div>
                        <button className="barIcon" onClick={showHideSideBar}>
                            <i className="fa-solid fa-bars"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Navbar