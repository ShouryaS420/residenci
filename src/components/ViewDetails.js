import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel2 from "react-multi-carousel";
import '../css/ViewDetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from "./Loading";
import FloorPlan from './FloorPlan';

import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from "react-router-dom";
import { WhatsAppShareButton } from 'react-share';
import ScrollSpy from "react-ui-scrollspy";
import toast, { Toaster } from 'react-hot-toast';

export default function ViewDetails() {

    const responsive2 = {
        desktop: {
            breakpoint: { max: 2000, min: 800 },
            items: 8.3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const { id } = useParams();
    localStorage.setItem("shortListID",JSON.stringify(id))
    const { builderID } = useParams();

    const [trendingProjects, setTrendingProjects] = useState([]);

    const fetchData = () => {
        return fetch("http://82.180.136.42:5000/api/projects/fetchDetailsBySearchLocality")
            .then((response) => response.json())
            .then((data) => setTrendingProjects(data));
    }
    useEffect(() => {
        fetchData();
    },[]);

    const [projectDetails, setProjectDetails] = useState('Hi!👋 mama he aapla url but te url http aahe mannun te open hot nahi aahe ok mama'); // Replace with your actual project details

    const handleShareClick = () => {
        const shareUrl = window.location.href;
        const message = projectDetails;
      
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%20${encodeURIComponent(shareUrl)}`;
        window.open(whatsappUrl, '_blank');
    };
    const [credentials, setCredentials] = useState(
        {
            name: "",
            email: "",
            mobile: "",
        }
    );
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const {name, email, mobile} = credentials;
        const response = await fetch("http://82.180.136.42:5000/api/visit/siteVisit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, mobile})
        });
        const json = await response.json();
        console.log(json.message);
        toast(json.message);
    }

    
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const number = localStorage.getItem("Username");
    
    const [checkbox, setCheckbox] = useState(false);
    const handleInput = ()  => {
        if (checkbox === false) {
            setCheckbox(true);
        }else {
            setCheckbox(false);
        }
    }

    // Project Nearby Locality show by project id start
        const [projectLocality, setProjectLocality] = useState([]);

        useEffect(() => {
            const fetchProjectLocality = async () => {
                try {
                const response = await axios.get(`http://82.180.136.42:5000/api/projects/fetchProjectNearbyLocalityByProjectID/${id}/locality`); // Replace with your backend API endpoint
                setProjectLocality(response.data);
                } catch (err) {
                console.error(err);
                }
            };
            fetchProjectLocality();
        }, [id]);
    // Project Nearby Locality show by project id end

    // Project variant show by project id start
        const [projectVariants, setProjectVariants] = useState([]);

        useEffect(() => {
            const fetchProjectVariants = async () => {
                try {
                    const response = await axios.get(`http://82.180.136.42:5000/api/projects/fetchProjectVariantByProjectID/${id}/variant`); // Replace with your backend API endpoint
                    setProjectVariants(response.data);
                } catch (err) {
                    console.error(err);
                }
            };
        fetchProjectVariants();
        }, [id]);
    // Project variant show by project id end

    // Project Amenities show by project id start
        const [projectAmenities, setProjectAmenities] = useState([]);

        useEffect(() => {
        const fetchProjectAmenities = async () => {
            try {
            const response = await axios.get(`http://82.180.136.42:5000/api/projects/fetchProjectAmenitiesByProjectID/${id}/amenities`); // Replace with your backend API endpoint
            setProjectAmenities(response.data);
            } catch (err) {
            console.error(err);
            }
        };
        fetchProjectAmenities();
        }, [id]);
    // Project Amenities show by project id end

    // show developer data by builderID which is present in developer database start
        const [builder, setBuilder] = useState(null);
        const [desc2, setDesc] = useState('');

        const desc1 = localStorage.getItem("developerDesc");
        // const description = desc.slice(1,-1);
        const desc = desc1.slice(1, -1);
        const [text, setText] = useState(desc.slice(0, 190));
        const [readMore, setReadMore] = useState(false);

        useEffect(() => {
        const fetchData = async () => {
            try {
            // Fetch builder data by builderID
            const response = await axios.get(`http://82.180.136.42:5000/api/projects/fetchProjectDeveloper/${builderID}`); // Replace 12345 with the actual builderID you want to fetch
            setBuilder(response.data);
            } catch (error) {
            console.error(error);
            }
        };
    
        fetchData();
        }, []);
    // show developer data by builderID which is present in developer database end

    // Project Details View start
    
        const [project, setProject] = useState(null);

        useEffect(() => {
            const fetchProject = async () => {
                try {
                    const response = await axios.get(`http://82.180.136.42:5000/api/projects/fetchProjectDetailsByID/${id}`); // Replace with your backend API endpoint
                    setProject(response.data);
                } catch (err) {
                    console.error(err);
                }
            };
            fetchProject();
        }, [id]);
    
        if (!project) {
            return <div><Loading /></div>
        }
    // Project Details View end
    
    var retrievedObject = localStorage.getItem('myObject');
    const mobile = number.slice(1,-1);
    const mobile2 = '1234567890';
    const save = "yes";
    const save2 = "no";

    const updateField = async () => {
        try {
            const response = await axios.put('http://82.180.136.42:5000/api/projects/update', {
                id,
                mobile,
                save,
            });
            console.log(response.data); // optional: handle response
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    const updateField2 = async () => {
        try {
            const response = await axios.put('http://82.180.136.42:5000/api/projects/update2', {
                id,
                mobile2,
                save2,
            });
            console.log(response.data); // optional: handle response
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const url = window.location.href;

    return (
        <>
            <Toaster style={{ zIndex: '100000', }} />
            <Navbar/>
            <section className="tfp-topProjectDetail">
                <div className="contaier tfp-topProjectDetail-contaier">
                    <div id="deskProjBreadCrumb" class="desktopBreadCrumb__brdcrumbContainer">
                        <div>
                            <div id="breadCrumbItemWrapper" class="desktopBreadCrumb__breadCrumbItem">
                                <div>
                                    <span>
                                        <Link class="desktopBreadCrumb__linkStyle" to="/" target="" title="Home" itemprop="url">
                                            <span itemprop="title">Home</span>
                                        </Link>
                                    </span>
                                </div>
                                <span class="desktopBreadCrumb__rPin">›</span>
                            </div>
                            <div id="breadCrumbItemWrappercity" class="desktopBreadCrumb__breadCrumbItem">
                                <div>
                                    <span>
                                        <Link class="desktopBreadCrumb__linkStyle" to="/" target="_blank" title="New Projects in Pune" itemprop="url">
                                            <span itemprop="title">Projects in Pune</span>
                                        </Link>
                                    </span>
                                </div>
                                <span class="desktopBreadCrumb__rPin">›</span>
                            </div>
                            <div id="projectNameTab" class="desktopBreadCrumb__breadCrumbItem desktopBreadCrumb__linkStyle">{project.ProjectName}</div>
                        </div>
                    </div>
                    <div className="row tfp-topProjectDetail-row">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center">
                            <div className="MuiGrid-root jss74 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-5 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                    <div className="property-project-name">
                                        <h1 className="MuiTypography-root MuiTypography-h1" style={{color:'#171717',fontSize:'20px',fontWeight:'600'}} >{project.ProjectName}</h1>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" style={{marginTop:'4px'}}>
                                    <div className="property-dev-name">
                                        <h5 className="MuiTypography-root MuiTypography-h5" style={{color:'#171717',fontSize:'15px',fontFamily: 'Open Sans, sans-serif'}}>By {project.builderName}</h5>
                                    </div>
                                    <div className="property-dev-location">{project.locality}, {project.city}</div>
                                </div>
                            </div>
                            <div className="MuiGrid-root jss75 MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-7 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-flex-end">
                                    <div className="MuiGrid-root brd-right MuiGrid-item">
                                        <div className="property-project-name" style={{ display: 'flex' }}>
                                            <h4 className="MuiTypography-root MuiTypography-h4" style={{color:'#171717',fontSize:'20px',fontWeight:'600'}}> {project.BHk}&nbsp;</h4> 
                                            <h4 className="MuiTypography-root MuiTypography-h4"> BHK</h4>
                                        </div>
                                        <span className="property-dev-price">Configuration</span>
                                    </div>
                                    <div className="MuiGrid-root brd-left MuiGrid-item">
                                        <div className="property-project-name">
                                            {projectVariants.slice(0, 1).map(variant => (
                                                <h4 className="MuiTypography-root MuiTypography-h4" style={{color:'#171717',fontSize:'20px',fontWeight:'600'}}>{variant.price}</h4>
                                            ))}
                                        </div>
                                        <span className="property-dev-price">Starting Price All Inc.</span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item" style={{paddingLeft:'15px'}}>
                                        <div className="property-project-name" style={{ display: 'flex' }}>
                                            {projectVariants.slice(0, 1).map(variant => (
                                                <h4 className="MuiTypography-root MuiTypography-h4" style={{color:'#171717',fontSize:'20px',fontWeight:'600'}}>{variant.sqFt} SQ.FT</h4>
                                            ))}
                                            &nbsp;
                                            <h4 className="MuiTypography-root MuiTypography-h4">-</h4>
                                            &nbsp;
                                            {projectVariants.slice(1, 2).map(variant => (
                                                <h4 className="MuiTypography-root MuiTypography-h4" style={{color:'#171717',fontSize:'20px',fontWeight:'600'}}>{variant.sqFt} SQ.FT</h4>
                                            ))}
                                        </div>
                                        <span className="property-dev-price">Carpet Area</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-q="gallery" className="css-19mc2k3">
                            <div data-content="Project Images" className="css-183i7xd">
                                <img src={project.headImg} className="css-1783362" alt="Gallery Cover Pic of Pride Wellington" data-q="alt" decoding="async"/>
                                <img src={project.headImg} className="css-40aejx" alt="Gallery Cover Pic of Pride Wellington" data-q="alt" decoding="async"/>
                                <div className="css-112su84">
                                    <div className="css-1g9jt0k">
                                        <button className="css-11b8ewu" onClick={handleShareClick}>
                                            <span className="share"><i className="fa fa-share"></i> Share</span>
                                        </button>
                                        {project.save === 'no' &&
                                            <>
                                                <button className="css-4uzdfd" onClick={updateField} style={{ width: '115px', }}>
                                                    <span data-q="shortlist-0" className="shortlistIcon css-yibqst"></span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ width: '15px', height: '15px' }}>
                                                        <path style={{ width: '15px', height: '15px' }} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                                                    </svg>
                                                    <span className="css-1ic3lh">Shortlist</span>
                                                </button>
                                            </>
                                        }
                                        {project.save === 'yes' &&
                                            <>
                                                <button className="css-4uzdfd" onClick={updateField2} style={{ width: '115px', }}>
                                                    <span data-q="shortlist-0" className="shortlistIcon css-yibqst"></span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ width: '15px', height: '15px' }}>
                                                        <path style={{ fill:'#dd0e0e', width: '15px', height: '15px' }} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                                                    </svg>
                                                    <span className="css-1ic3lh">Shortlisted</span>
                                                </button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div data-content="" className="css-1pu28c2">
                                <img src="https://img.youtube.com/vi/TsZC_6dnSCY/hqdefault.jpg" className="img css-3693fo" data-q="alt" tag="" decoding="async" naptha_cursor="text"/>
                                <div className="css-1aovu1g">
                                    <div className="css-1sc8aox">
                                        <span className="css-10cxvqp">
                                            <i className="fa-solid fa-play"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-content="Project Images" className="css-b6gzzu">
                                <img src="https://is1-3.housingcdn.com/012c1500/2bff9960ceaf40e94567259f5fc5aa21/v0/medium.jpeg.webp" className="img css-3693fo" alt="Project Image of 780.0 - 1156.73 Sq.ft 2 BHK Apartment for buy in Pride Wellington" data-q="alt" decoding="async"/>
                                <div className="css-14qe0vr"> 
                                    <span>+</span> 
                                    <span>18more</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tfp-wo18a8">
                <div className="tfp-tfqk3y">
                    <div className="slider tfp-116k6m">
                        <div className="slider-inner tfp-7nnslv">
                            <div className="slider-Wrapper tfp-dlu4u9" style={{transform:'translateX(0px)'}}>
                                <Carousel2
                                    swipeable={true}
                                    draggable={true}
                                    showDots={false}
                                    responsive={responsive2}
                                    infinite={false}
                                    autoPlay={false}
                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    transitionDuration={500}
                                    containerclassName="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                >
                                    {url === `http://localhost:3000/projects/view-details/${id}/${builderID}#overviewDetails` ? (
                                        <a href="#overviewDetails">
                                            <div className="slide-element tfp-om3run active">
                                                <div className="tfp-uwwqev">
                                                <div id="1-navtitle" className="tfp-fw8av7">Overview</div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a href="#overviewDetails">
                                            <div className="slide-element tfp-om3run">
                                                <div className="tfp-uwwqev">
                                                <div id="1-navtitle" className="tfp-fw8av7">Overview</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {url === `http://localhost:3000/projects/view-details/${id}/${builderID}#Introduction` ? (
                                        <a href="#Introduction">
                                            <div className="slide-element tfp-om3run active">
                                                <div className="tfp-uwwqev">
                                                <div id="2-navtitle" className="tfp-fw8av7">Introduction</div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a href="#Introduction">
                                            <div className="slide-element tfp-om3run">
                                                <div className="tfp-uwwqev">
                                                <div id="2-navtitle" className="tfp-fw8av7">Introduction</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {url === `http://localhost:3000/projects/view-details/${id}/${builderID}#Floor_Plan` ? (
                                        <a href="#Floor_Plan">
                                            <div className="slide-element tfp-om3run active">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '4rem', }}>Floor Plan</div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a href="#Floor_Plan">
                                            <div className="slide-element tfp-om3run">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '4rem', }}>Floor Plan</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {url === `http://localhost:3000/projects/view-details/${id}/${builderID}#amenities` ? (
                                        <a href="#amenities">
                                            <div className="slide-element tfp-om3run active">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '4rem', }}>Amenities</div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a href="#amenities">
                                            <div className="slide-element tfp-om3run">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '4rem', }}>Amenities</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {url === `http://localhost:3000/projects/view-details/${id}/${builderID}#location` ? (
                                        <a href="#location">
                                            <div className="slide-element tfp-om3run active">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '3.5rem', }}>Location</div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a href="#location">
                                            <div className="slide-element tfp-om3run">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '3.5rem', }}>Location</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {url === `http://localhost:3000/projects/view-details/${id}/${builderID}#Developer_section` ? (
                                        <a href="#Developer_section">
                                            <div className="slide-element tfp-om3run active">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '7rem', }}>About Developer</div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a href="#Developer_section">
                                            <div className="slide-element tfp-om3run">
                                                <div className="tfp-uwwqev">
                                                <div id="3-navtitle" className="tfp-fw8av7" style={{ width: '7rem', }}>About Developer</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                </Carousel2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="tfp-topProjectDetail2">
                <div className="tfp-topProjectDetail-contaier">
                    <div className="row tfp-topProjectDetail-row">
                        <div className="tfp-m1z8tl">

                            <div className="tfp-1o20zr1">

                                <ScrollSpy>
                                    <section id="overviewDetails" className="tfp-12c0fe6">
                                        <section className="tfp-0">
                                            <div data-q="more-about-project" className="tfp-fq1k4c">
                                                <h2 className="tfp-1n0yqli">{project.ProjectName} Overview</h2>
                                                <table className="tfp-13o7eu2">
                                                    <tbody className="tfp-1mkc5st">
                                                        <tr className="data-point tfp-1dw01hu">
                                                            <th className="tfp-2fe3eo">Project Area</th>
                                                            <td className="tfp-m5gngy">
                                                                <div className="tfp-g89h0y">{project.landParcel} Acres</div>
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-1lcoo1d">
                                                            <th className="tfp-2fe3eo">Sizes</th>
                                                            <td className="tfp-m5gngy" style={{ display: '-webkit-box', }}>
                                                                {projectVariants.slice(0, 1).map(variant => (
                                                                    <div className="tfp-g89h0y">{variant.sqFt} sq.ft.- </div>
                                                                ))}
                                                                {projectVariants.slice(1, 2).map(variant => (
                                                                    <div className="tfp-g89h0y"> {variant.sqFt} sq.ft.</div>
                                                                ))}
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-1xsqnfd">
                                                            <th className="tfp-2fe3eo">Project Size</th>
                                                            <td className="tfp-m5gngy">
                                                                <div className="tfp-g89h0y">{project.tower} Buildings - {project.totalUnits} units</div>
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-1l1ymfu">
                                                            <th className="tfp-2fe3eo">Launch Date</th>
                                                            <td className="tfp-m5gngy">
                                                                <div className="tfp-g89h0y">{project.launchDate}</div>
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-1rc980e">
                                                            <th className="tfp-2fe3eo">Starting Price</th>
                                                            <td className="tfp-m5gngy">
                                                                <div className="tfp-g89h0y">
                                                                    {projectVariants.slice(0, 1).map(variant => (
                                                                        <>
                                                                            <span className="rupee-icon tfp-1cqirzg">₹ </span>{variant.price}
                                                                        </>
                                                                    ))}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-18jdtc4">
                                                            <th className="tfp-2fe3eo">Possession Starts</th>
                                                            <td className="tfp-m5gngy">
                                                                <div className="tfp-g89h0y">{project.possessionDate}</div>
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-78vvkv">
                                                            <th className="tfp-2fe3eo">Configurations</th>
                                                            <td className="tfp-m5gngy" style={{ flexFlow: 'revert', }}>
                                                                <div className="tfp-g89h0y">{project.BHk} BHK Apartments</div>
                                                            </td>
                                                        </tr>
                                                        <tr className="data-point tfp-1w61pq1">
                                                            <th className="tfp-2fe3eo">Rera Id</th>
                                                            <td className="tfp-m5gngy">
                                                                <a href="" className="tfp-1840t66">{project.reraID}</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="tfp-1w1q62f">
                                                    <div className="tfp-qyftnl" onClick={handleShareClick}><i className="fa-solid fa-share"></i> Share</div>
                                                    {project.save === 'no' &&
                                                        <>
                                                            <div className="tfp-ysdrrh" onClick={updateField}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                                    <path style={{fill: '#d8232a'}} d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                                                </svg>
                                                                <span className="tfp-1mnhdci"><i className="fa-solid fa-heart"></i> Shortlist</span>
                                                            </div>
                                                        </>
                                                    }
                                                    {project.save === 'yes' &&
                                                        <>
                                                            <div className="tfp-ysdrrh" onClick={updateField2}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ width: '15px', height: '15px' }}>
                                                                    <path style={{ fill:'#dd0e0e', width: '15px', height: '15px' }} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                                                                </svg>
                                                                <span className="tfp-1mnhdci"><i className="fa-solid fa-heart"></i> Shortlisted</span>
                                                            </div>
                                                        </>
                                                    }
                                                    <button className="cta  tfp-evby7c">Ask For Details</button>
                                                </div>
                                            </div>
                                        </section>
                                    </section>

                                    <section id="Introduction" className="tfp-12c0fe6">
                                        {builder.map((userObj, index) => {
                                            if (userObj.title === project.builderName) {
                                                return (
                                                    <section className="tfp-0">
                                                        <div data-q="more-about-project" className="tfp-fq1k4c">
                                                            <h2 className="tfp-1n0yqli">Introduction to {userObj.title} </h2>
                                                            <div className="introduction_title" style={{padding: '0 15px',fontSize: '14px',color: 'rgb(23, 23, 23)',fontWeight: '400',lineHeight: '24px',textAlign: 'justify'}}>
                                                                {/* <span>{userObj.desc}</span> */}
                                                                {text}
                                                                {!readMore && "..."}
                                                                <span
                                                                    className="show_text jss280" id="show_text"
                                                                    onClick={() => {
                                                                        setDesc(localStorage.setItem("developerDesc",JSON.stringify(userObj.desc)));
                                                                        if (!readMore) {
                                                                            setText(desc);
                                                                            setReadMore(true);
                                                                        } else {
                                                                            setText(desc.slice(0, 190));
                                                                            setReadMore(false);
                                                                        }
                                                                    }}
                                                                >
                                                                    {readMore ? " Show Less" : " Read More"}
                                                                </span>
                                                                {/* <span>Read More</span> */}
                                                            </div>
                                                        </div>
                                                    </section> 
                                                )
                                            }
                                        })}
                                    </section>

                                    <section id="Floor_Plan" className="tfp-12c0fe6">
                                        <section className="tfp-0">
                                            <div data-q="more-about-project" className="tfp-fq1k4c">
                                                <h2 className="tfp-1n0yqli">Floor Plan</h2>
                                                {projectVariants.slice(0, 1).map(variant => {
                                                    localStorage.setItem("myObject", variant._id);
                                                })}
                                                <Tabs defaultActiveKey={retrievedObject}>
                                                    {projectVariants.map(variant => (
                                                        <Tab eventKey={variant._id} title={variant.variant}>
                                                            <FloorPlan img={variant.img} />
                                                        </Tab>
                                                    ))}
                                                </Tabs>
                                            </div>
                                        </section>
                                    </section>

                                    <section id="amenities" className="tfp-12c0fe6">
                                        <h2 className="tfp-1n0yqli">{project.ProjectName} Amenities</h2>
                                        <div className="tfp-a9s06j">
                                            <section className="tfp-0">
                                                <div className="item-container tfp-ck1qbr">
                                                    {projectAmenities.map(amenities => {
                                                        if(amenities.value === 'Gymnasium') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/Gymnasium.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Swimming Pool') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/swimming-pool.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Badminton Court(s)') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/badminton.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Tennis Court(s)') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">                                                                        
                                                                            <img src="/amenities/tennis-court.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Squash Court') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/squash-court.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Kids Play Areas') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">                                                                        
                                                                            <img src="/amenities/kids-play-area.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Jogging / Cycle Track') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/jogging.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Power Backup') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/power-backup.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Central AC') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/central-ac.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Central Wi-Fi') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/central-wifi.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Attached Market') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/market.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Restaurant') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/restaurant.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Home Automation') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/home-automation.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === '24 x 7 Security') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/24x7-security.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Clubhouse') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/clubhouse.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'High Speed Elevators') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/elevator.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Pre-School') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/pre-school.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Medical Facility') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/medical-facility.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Day Care Center') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/day-care-center.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                        if(amenities.value === 'Pet Area') {
                                                            return (
                                                                <div className="cell tfp-gz6x42">
                                                                    <div className="tfp-1833dfp">
                                                                        <div className="icon tfp-79km7r">
                                                                            <img src="/amenities/pet-area.png" alt="" style={{ height: '25px' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="label tfp-bec9jp">{amenities.value}</div>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </section>
                                            {/* <div className="tfp-tn0sz9">View All Amenities and Interiors</div> */}
                                        </div>
                                    </section>

                                    <section id="location" className="tfp-12c0fe6">
                                        <h2 className="tfp-1n0yqli">Location Map and Landmarks</h2>
                                        
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.207287528021!2d73.7342495750633!3d18.56469118253743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bd9e8ab100a9%3A0xf7fbe093aac40a49!2sGodrej%20Hillside%2C%20Pune%20-%20Official!5e0!3m2!1sen!2sin!4v1686056322565!5m2!1sen!2sin" width="670" height="450" style={{border:'0',marginLeft: '10px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>

                                        <section className="tfp-location_slider">
                                            <h2 className="tfp-location-1n0yqli">Location Map and Landmarks</h2>

                                            <div className="tfp-location-slider">
                                                {projectLocality.map(locality => (
                                                    <div className="item">
                                                        <div className="cardTile">
                                                        <div className="cardTitle">{locality.name}</div>
                                                        <div className="cardLocation">{locality.area}</div>
                                                        <div className="cardDistance">{locality.KM} KM distance</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </section>
                                    </section>
                    
                                    <section id="Developer_section"className="tfp-12c0fe6">
                                        <section className="tfp-0">
                                            <div className="tfp-1nl0yk4">
                                                <h2 className="tfp-1n0yqli">About Manhattan at Pride World City</h2>
                                                <div className="MuiGrid-root builderGroupContainer MuiGrid-container2">
                                                    {builder.map((userObj, index) => {
                                                        if (userObj.title === project.builderName) {
                                                            return (
                                                                <>
                                                                    <div className="MuiGrid-root MuiGrid-item tfp-developer MuiGrid-grid-xs-12 MuiGrid-grid-sm-3">
                                                                        <div className="MuiGrid-root MuiGrid-container" style={{ display: 'block', }}>
                                                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-12">
                                                                                <div className="jss325">
                                                                                    <div style={{position: 'relative'}}>
                                                                                        <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                                                            <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                                                                                                <img alt="" src={userObj.pic} style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px',}} />
                                                                                            </span>
                                                                                            <noscript></noscript>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-12">
                                                                                <div className="jss327">
                                                                                    <span className="jss328">Established In -
                                                                                        <span style={{fontWeight: 'bold', paddingLeft: '2px'}}>1897</span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="jss327">
                                                                                    <span className="jss328">Total Projects - 
                                                                                        <span style={{fontWeight: 'bold', paddingLeft: '2px'}}>97</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-9">
                                                                        <span className="jss334">
                                                                            <span>{userObj.desc}</span>
                                                                        </span>
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </section>
                                    </section>

                                    <section id="Relaated_Projects" className="tfp-12c0fe6">
                                        <section className="tfp-0">
                                            <div data-q="more-about-project" className="tfp-fq1k4c">
                                                <h2 className="tfp-1n0yqli">Related Project</h2>
                                                <div className="horizontal-TOPBUILDER-carousel2" id="horizontal-TOPBUILDER-carousel">
                                                    <div className="tfp-topbuilder-left">
                                                        <button title="Floor Plan Scroll left">
                                                            <i className="fa-solid fa-arrow-left"></i>
                                                        </button>
                                                    </div>
                                                    <div className="tfp-topbuilder-right">
                                                        <button title="Floor Plan Scroll right">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                    {trendingProjects.slice(0, 8).map((userObj, index) => {
                                                        if (userObj.locality === project.locality) {
                                                            return (
                                                                <>
                                                                    <div className="card-wrapper-builder">
                                                                        <div className="property-card-global-wrapper tfp__3wN1W">
                                                                            <div className="listpage-carousel-wrapper tfp__3TU9k" style={{height: '311px'}}>
                                                                                <div className="listpage-carousel-wrapper-image ">
                                                                                    <div className="tfp__dJeTz" style={{backgroundImage: `url(${project.headImg})`, backgroundSize: 'cover'}}></div>
                                                                                </div>
                                                                                <div className="property-card-detail-header" style={{height: '151px'}}>
                                                                                    <div className="property-card-carousal-title">{project.ProjectName}</div>
                                                                                    <span className="property-card-carousal-address">by {project.builderName}, {project.city}</span>
                                                                                    <button className="listpage-carousal-view-btn btn btn-primary" id="listpage-carousal" type="button">View Details</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            );
                                                        }
                                                    })}                                                    
                                                </div>
                                            </div>
                                        </section>
                                    </section>
                                </ScrollSpy>
                            </div>

                            <div className="tfp-1q2qa0g">
                                <section>
                                    <div data-q="crf" className="crf-container tfp-1uicnug">
                                        <div className="crf-interactive tfp-1hi1u8l">
                                            <div className="tfp-0">
                                                <div className="tfp-1mptimz">
                                                    <div className="tfp-11tfwwa">
                                                        <div className="crf-title tfp-73gtih">Request a Site Visit</div>
                                                    </div>
                                                    <div className="contact-form tfp-1kawqjx">
                                                        <form>
                                                            <div className="tfp-j1db34">

                                                                {/* <form className="form-item type-pill tfp-59ae4g"> */}
                                                                    <div className="form-item type-pill tfp-1o955tu">
                                                                        <div className="tfp-gueyi8">
                                                                            <input name="name" required="" type="name" placeholder="Enter Name" className="inputStyle tfp-1g0rnzl" value={credentials.name} onChange={onChange} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-item type-pill tfp-1o955tu">
                                                                        <div className="tfp-gueyi8">
                                                                            <input name="email" required="" type="email" placeholder="Enter Email" className="inputStyle tfp-1g0rnzl" value={credentials.email} onChange={onChange} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="tfp-19sk4h4">
                                                                        <div tabIndex="-1" className="code-selector tfp-2ssna7">
                                                                            <select disabled style={{width: '61px',outline: 'none',border: '0'}}>
                                                                                <option className="tfp-1oshgwo">+91</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="tel-inp-cont tfp-34qgsc">
                                                                            <input name="mobile" type="number" className="tel-inp inputStyle tfp-1g0rnzl" placeholder="Phone" maxLength={5} value={credentials.mobile} onChange={onChange} />
                                                                        </div>
                                                                    </div>
                                                                {/* </form> */}
                                                            </div>
                                                    
                                                            <div className="tfp-1v51a49">
                                                                <div className="form-item type-checkbox tfp-1s7xwmf">
                                                                    <div>
                                                                        <div className="sel-cont tfp-0">
                                                                            <div className="options-wrap">
                                                                                <div className="option active tfp-1ui14gc">
                                                                                    <span className="tfp-0">
                                                                                        <label className="Checkbox_checkboxLabel__3HKUG" onClick={handleInput}>
                                                                                            <div style={{display: 'flex', width: '20rem'}}>
                                                                                                <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" defaultValue="CUTLERY_INSTRUCTION_CHK_BOX" id="checkbox" required />
                                                                                                <svg
                                                                                                    className="Checkbox_checkboxTick__TZzsL"
                                                                                                    id="newCheckbox"
                                                                                                    viewBox="0 0 24 24"
                                                                                                >
                                                                                                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                                                                </svg>
                                                                                                <span style={{ marginTop: '-2px', }}>Enable updates through  WhatsApp</span>
                                                                                            </div>
                                                                                        </label>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="crf-bottom-tfp">
                                                                <div className="tfp-16o6ag0">
                                                                    <button type="button" disabled={credentials.name.length < 5 || credentials.email.length < 5 || credentials.mobile.length < 10} className="cta  tfp-1ljvbku" onClick={handleClick}>Book Site Visit</button>
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
