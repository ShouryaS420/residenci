import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TrendingProjectsCarousel from "./TrendingProjectsCarousel";
import ServiceOffering from "./ServiceOffering";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../css/Home.css';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProjectsInWakad from "./topProjectsInPune/ProjectsInWakad";
import ProjectsInBaner from "./topProjectsInPune/ProjectsInBaner";
import ProjectsInWagholi from "./topProjectsInPune/ProjectsInWagholi";
import ProjectsInKharadi from "./topProjectsInPune/ProjectsInKharadi";
import ProjectsInHinjewadi from "./topProjectsInPune/ProjectsInHinjewadi";
import ProjectsInHadapsar from "./topProjectsInPune/ProjectsInHadapsar";
import ProjectsInBalewadi from "./topProjectsInPune/ProjectsInBalewadi";
import { TextField } from '@mui/material';
import { Autocomplete } from "@mui/material";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Home(props) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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

    const alert = () => {
        alert('yes');
    }

    return (
        <>
            <Navbar/>
            {/* Hero section */}
                <div className="searchContainer " data-cms-id="300457" data-cms-template="cWEB-tfpSpaces">
                    <div className="searchContainer__wrapper">
                        <span className="searchContainer__bannerSvg searchContainer__bannerSvg--1">
                            <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(0 -31)" fill="none" fillRule="evenodd" opacity=".6">
                                <rect fill="#C11F3D" x="14.311" y="32.451" width="19.209" height="6.616" rx="3.308"></rect>
                                <rect fill="#C11F3D" x="165.943" y="48.731" width="11.338" height="6.616" rx="3.308"></rect>
                                <path d="M62.465 95.555H115.3v27.822H62.465V95.555zm149.313 28.424H.482l.14-.6h211.156v.6zM63.78 35.212h50.956v4.694H63.78v-4.694z" fill="#A81433" fillRule="nonzero"></path>
                                <path fill="#880F2F" d="M114.736 35.212h26.043v4.694h-26.043z"></path>
                                <path fill="#880F2F" d="M114.736 39.905h22.808v83.474h-22.808z"></path>
                                <path fill="#B21737" d="M66.874 39.905h47.862v54.33H66.874z"></path>
                                <path fill="#880F2F" d="M57.587 90.017h57.15v6.292h-57.15z"></path>
                                <path d="M120.978 107.52h10.324v15.857h-10.324V107.52zm-3.426-58.042h17.176v3.471h-17.177v-3.471zm0 10.321h17.176v3.472h-17.177v-3.472zm0 10.325h17.176v3.47h-17.177v-3.47zm0 10.324h17.176v3.47h-17.177v-3.47z" fill="#A81433" fillRule="nonzero"></path>
                                <path d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z" fill="#880F2F" fillRule="nonzero"></path>
                                <path fill="#A81433" d="M72.623 25.29h33.267v7.375H72.623z"></path>
                                <path d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z" fill="#A81433" fillRule="nonzero"></path>
                                <g transform="translate(5.912 63.749)">
                                    <circle fill="#B31941" cx="8.86" cy="8.829" r="8.801"></circle>
                                    <path fill="#931435" d="M8.362 17.63h.565v14.283h-.565z"></path>
                                </g>
                                <g transform="translate(30.125 59.243)">
                                    <path fill="#931435" d="M10.172 12.205h.845v24.213h-.845z"></path>
                                    <circle fill="#B31941" cx="10.454" cy="10.516" r="10.417"></circle>
                                </g>
                                <g transform="translate(151.187 70.224)">
                                    <path fill="#931435" d="M6.667.901h.845v24.213h-.845z"></path>
                                    <circle fill="#B31941" cx="7.089" cy="6.926" r="6.827"></circle>
                                </g>
                                <g transform="translate(184.69 59.807)">
                                    <path fill="#931435" d="M10.037 11.642h.845v24.213h-.845z"></path>
                                    <circle fill="#B31941" cx="10.459" cy="10.516" r="10.417"></circle>
                                </g>
                                </g>
                            </svg>
                        </span>
                        <span className="searchContainer__bannerSvg searchContainer__bannerSvg--2">
                            <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(0 -31)" fill="none" fillRule="evenodd" opacity=".6">
                                <rect fill="#C11F3D" x="14.311" y="32.451" width="19.209" height="6.616" rx="3.308"></rect>
                                <rect fill="#C11F3D" x="165.943" y="48.731" width="11.338" height="6.616" rx="3.308"></rect>
                                <path d="M62.465 95.555H115.3v27.822H62.465V95.555zm149.313 28.424H.482l.14-.6h211.156v.6zM63.78 35.212h50.956v4.694H63.78v-4.694z" fill="#A81433" fillRule="nonzero"></path>
                                <path fill="#880F2F" d="M114.736 35.212h26.043v4.694h-26.043z"></path>
                                <path fill="#880F2F" d="M114.736 39.905h22.808v83.474h-22.808z"></path>
                                <path fill="#B21737" d="M66.874 39.905h47.862v54.33H66.874z"></path>
                                <path fill="#880F2F" d="M57.587 90.017h57.15v6.292h-57.15z"></path>
                                <path d="M120.978 107.52h10.324v15.857h-10.324V107.52zm-3.426-58.042h17.176v3.471h-17.177v-3.471zm0 10.321h17.176v3.472h-17.177v-3.472zm0 10.325h17.176v3.47h-17.177v-3.47zm0 10.324h17.176v3.47h-17.177v-3.47z" fill="#A81433" fillRule="nonzero"></path>
                                <path d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z" fill="#880F2F" fillRule="nonzero"></path>
                                <path fill="#A81433" d="M72.623 25.29h33.267v7.375H72.623z"></path>
                                <path d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z" fill="#A81433" fillRule="nonzero"></path>
                                <g transform="translate(5.912 63.749)">
                                    <circle fill="#B31941" cx="8.86" cy="8.829" r="8.801"></circle>
                                    <path fill="#931435" d="M8.362 17.63h.565v14.283h-.565z"></path>
                                </g>
                                <g transform="translate(30.125 59.243)">
                                    <path fill="#931435" d="M10.172 12.205h.845v24.213h-.845z"></path>
                                    <circle fill="#B31941" cx="10.454" cy="10.516" r="10.417"></circle>
                                </g>
                                <g transform="translate(151.187 70.224)">
                                    <path fill="#931435" d="M6.667.901h.845v24.213h-.845z"></path>
                                    <circle fill="#B31941" cx="7.089" cy="6.926" r="6.827"></circle>
                                </g>
                                <g transform="translate(184.69 59.807)">
                                    <path fill="#931435" d="M10.037 11.642h.845v24.213h-.845z"></path>
                                    <circle fill="#B31941" cx="10.459" cy="10.516" r="10.417"></circle>
                                </g>
                                </g>
                            </svg>
                        </span>
                        <h1 className="searchContainer__tagline">Over 157,000 hotels and homes across 35 countries</h1>
                        <div className="searchContainer__searchWidgetContainer">
                            <div className="tfp-row tfp-row--no-spacing homeSearchWidget1" data-cms-id="570807" data-cms-template="cWeb-Search">
                                <div className="tfp-cell tfp-cell--3-col tfp-cell--4-col-tablet tfp-cell--4-col-phone homeSearchWidget__gutter homeSearchWidget__dateRangePicker">
                                    <div className="tfp-cell tfp-cell--12-col tfp-cell--8-col-tablet tfp-cell--4-col-phone">
                                        <form className="autoCompleteDesktop__searchContainer">
                                            {/* <input id="autoComplete__home" type="text" className="autoCompleteDesktop__searchBox autoCompleteDesktop__searchBox--home autoCompleteDesktop__searchBox--nearbyVisible" placeholder="Search by city, hotel, or neighborhood" autoComplete="off" required=""/> */}
                                            <Autocomplete
                                                // autoComplete
                                                // autoHighlight
                                                freeSolo
                                                className="autoCompleteDesktop__searchBox autoCompleteDesktop__searchBox--home autoCompleteDesktop__searchBox--nearbyVisible" 
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
                                                    <TextField {...params} label="Search by Locality ex:- Wakad, Baner, Balewadi" variant="outlined" />
                                                )}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tfp-row tfp-row--no-spacing homeSearchWidget2" data-cms-id="570807" data-cms-template="cWeb-Search">
                                {/* <div className="tfp-cell tfp-cell--3-col tfp-cell--4-col-tablet tfp-cell--4-col-phone homeSearchWidget__gutter homeSearchWidget__dateRangePicker">
                                    <div className="tfp-row tfp-row--no-spacing datePickerDesktop datePickerDesktop--home">
                                        <div className="tfp-cell tfp-cell--12-col tfp-cell--8-col-tablet tfp-cell--4-col-phone d-text16 is-fontBold datePickerDesktop__checkInOut u-textEllipsis">
                                            <span className="datePickerDesktop__checkInOutText">Property Type</span>
                                            <span className="datePickerDesktop__arrowWrapper datePickerDesktop__arrowWrapper--home"></span>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="tfp-cell tfp-cell--3-col tfp-cell--4-col-tablet tfp-cell--4-col-phone homeSearchWidget__gutter homeSearchWidget__dateRangePicker">
                                    <div className="tfp-row tfp-row--no-spacing datePickerDesktop datePickerDesktop--home">
                                        <div className="tfp-cell tfp-cell--12-col tfp-cell--8-col-tablet tfp-cell--4-col-phone d-text16 is-fontBold datePickerDesktop__checkInOut u-textEllipsis">
                                            <span className="datePickerDesktop__checkInOutText">Budget</span>
                                            <span className="datePickerDesktop__arrowWrapper datePickerDesktop__arrowWrapper--home">–</span>
                                            <span className="datePickerDesktop__checkInOutText">1Lac - 2Lac</span>
                                        </div>
                                        <span></span>
                                    </div>
                                </div> */}
                                <Link to={`/search-details/${value1}`} className="tfp-cell tfp-cell--2-col tfp-cell--8-col-tablet tfp-cell--4-col-phone homeSearchWidget__gutter homeSearchWidget__search">
                                    <button className={`u-textCenter searchButton searchButton--home ${value1 ? 'no-disabled' : 'disabled'}`} disabled={value1 ? '' : 'disabled'}>Search</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Hero section end */}

            {/* carousel section */}
                {/* <div className="carouselContainer">
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src="/carouselImg/carousel-Img.jpg" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src="/carouselImg/carousel-Img.jpg" alt="second slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src="/carouselImg/carousel-Img.jpg" alt="ThirdR slide" />
                        </Carousel.Item>
                    </Carousel>
                </div> */}
            {/* carousel section end */}

            {/* main section */}
                <div className="Main">

                    {/* TrendingProjects */}
                        <div className="TrendingProjects">
                            <header className="header">
                                <h3 className="title css-xyzbyw">Trending Projects <span className="bold">in Pune</span></h3>
                            </header>
                            <TrendingProjectsCarousel/>
                        </div>
                    {/* TrendingProjects end */}

                    {/* TrendingProjects */}
                        <div className="ServiceOffering">
                            <ServiceOffering/>
                        </div>
                    {/* TrendingProjects end */}
                    
                    {/* ProjectsInSearchedLocality */}
                        <div className="ProjectsInSearchedLocality">
                            <header className="header">
                                <h3 className="title css-xyzbyw">Top Projects <span className="bold">in Pune</span></h3>
                            </header>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Wakad" {...a11yProps(0)} /> {/*1*/}
                                        <Tab label="Baner" {...a11yProps(1)} /> {/*1*/}
                                        <Tab label="Wagholi" {...a11yProps(2)} /> {/*1*/}
                                        <Tab label="Kharadi" {...a11yProps(3)} /> {/*1*/}
                                        <Tab label="Hinjewadi" {...a11yProps(4)} /> {/*2*/}
                                        <Tab label="Hadapsar" {...a11yProps(5)} /> {/*1*/}
                                        <Tab label="Balewadi" {...a11yProps(6)} /> {/*1*/}
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <ProjectsInWakad/>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <ProjectsInBaner/>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <ProjectsInWagholi/>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <ProjectsInKharadi/>
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <ProjectsInHinjewadi/>
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    <ProjectsInHadapsar/>
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    <ProjectsInBalewadi/>
                                </TabPanel>
                            </Box>
                        </div>
                    {/* ProjectsInSearchedLocality end */}

                    {/* WhyChooseUs */}
                        <div className="WhyChooseUs" style={{ marginBottom: '-110px', }}>
                            <header className="header">
                                <h3 className="title css-xyzbyw">Why <span className="bold">Choose Us</span></h3>
                            </header>
                            <WhyChooseUs />
                        </div>
                    {/* WhyChooseUs end */}

                </div>
            {/* main section end */}
            
            {/* footer */}
                <div className="footer">
                    <Footer/>
                </div>
            {/* footer end */}
        </>
    )
}

export default Home