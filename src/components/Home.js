import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TrendingProjectsCarousel from "./TrendingProjectsCarousel";
import ServiceOffering from "./ServiceOffering";
import UpComingProjects from "./UpComingProjects";
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
        // console.log(event);
        setValue(newValue);
    };

    const [value1, setValue1] = useState('');
    const [open, setOpen] = useState(false);
    const [myOptions, setMyOptions] = useState([]);
  
    const handleOptionSelect = (event, newValue) => {
        // setValue1(newValue);
        // setOpen(false);

        // // fetch data
        // fetch("https://askresidenci.com/projects/fetchDetailsBySearchLocality")
        // .then((response) => {
        //     return response.json();
        // })
        // .then((res) => {
        //     for (var i = 0; i < res.length; i++) {
        //         if (!myOptions.some((obj) => obj.label == res[i].name)) {
                    
        //             // create an object with a label
        //             let object = {
        //                 label: res[i].locality,
        //                 locality: res[i].locality,
        //             };
        //             myOptions.push(object);
        //         }
        //     }
        //     setMyOptions(myOptions);
        // });
    };

    // useEffect(() => handleOptionSelect(), [myOptions]);

    const alert = () => {
        alert('yes');
    }

    const [projectDetails, setProjectDetails] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const finalSelectedCity = cities.map((item, index) => {
        if (index === value) {
            return item.trim(',');
        }
    });

    // Ensure it's a string before calling replace
    const cityString = typeof finalSelectedCity === 'string' ? finalSelectedCity : String(finalSelectedCity);
    const updatedCity = cityString.replace(/,/g, '');

    // console.log('cityString', updatedCity);

    // const finalProjectDetails = projectDetails.map((item, index) => {
    //     if (item.locality.toLowerCase() === updatedCity.toLowerCase()) {
    //         console.log(item);
    //         // return item;
    //     }
    // })
    
    // useEffect(() => {
    //     const updatedText = finalSelectedCity.replace(/,/g, '');
    //     console.log(updatedText);
    //     setSelectedCity(updatedText);
    // }, []);
  
    useEffect(() => {
      // Fetch project details from your API
      fetch('https://askresidenci.com/api/projects/fetchAllProjectDetails')
        .then(response => response.json())
        .then(data => {            
            setProjectDetails(data.message);
            const uniqueCities = [...new Set(data.message.map(item => item.locality))];
            // console.log(uniqueCities);
            setCities(uniqueCities);
        })
        .catch(error => console.error('Error fetching project details:', error));
    }, []);

    return (
        <>
            <Navbar/>
            {/* Hero section */}
                <div className="searchContainer " data-cms-id="300457" data-cms-template="cWEB-tfpSpaces">
                    <div className="searchContainer__wrapper">
                        {/* <span className="searchContainer__bannerSvg searchContainer__bannerSvg--1">
                            <img src="/building-removebg-preview.png" alt="asdsa" />
                        </span> */}
                        <h1 className="searchContainer__tagline">Unlock the Best Real Estate Opportunities in Pune with Us</h1>
                        <span>
                            At AskResidenci, we're your key to Pune's real estate treasures. Discover the finest homes, investments, and commercial spaces across the city. Whether you seek a dream home, a smart investment, or a strategic business location, we've got you covered. Explore Pune's real estate opportunities with us.
                        </span>
                        <button className="scheduleACall">Schedule a call</button>
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

                    {/* TrendingProjects */}
                        <div className="up-coming-projects">
                            <header className="header">
                                <h3 className="title css-xyzbyw">Upcoming Projects <span className="bold">in Pune</span></h3>
                            </header>
                            <UpComingProjects/>
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
                                        {cities.map((item, index) => {
                                            return (
                                                <Tab label={item} {...a11yProps(index)}  />
                                            )
                                        })}
                                        {/* <Tab label="Baner" {...a11yProps(1)} />
                                        <Tab label="Wagholi" {...a11yProps(2)} />
                                        <Tab label="Kharadi" {...a11yProps(3)} />
                                        <Tab label="Hinjewadi" {...a11yProps(4)} />
                                        <Tab label="Hadapsar" {...a11yProps(5)} />
                                        <Tab label="Balewadi" {...a11yProps(6)} /> */}
                                    </Tabs>
                                </Box>
                                {finalSelectedCity}
                                {projectDetails.map((item, index) => {
                                    // console.log(item.locality);
                                    if (item.locality.toLowerCase() === updatedCity.toLowerCase()) {
                                        return (
                                            <TabPanel value={value} index={index}>
                                                {item.locality}
                                            </TabPanel>
                                        )
                                    }
                                })}
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