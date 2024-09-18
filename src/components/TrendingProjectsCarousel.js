import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import axios from 'axios';

export default function TrendingProjectsCarousel() {

    const responsive = {
        desktop1: {
            breakpoint: { max: 2000, min: 800 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 900, min: 515 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1400, min: 768 },
            items: 1.5,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 450, min: 100 },
            items: 1.5,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const [trendingProjects, setTrendingProjects] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:5000/api/projects/fetchAllTrendingProjectDetails")
            .then((response) => response.json())
            .then((data) => setTrendingProjects(data));
    }
    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
            <div className="carouselCard">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {trendingProjects && trendingProjects.length > 0 && trendingProjects.slice(0, 13).map((userObj, index) => {
                        if (userObj.ProjectName !== '') {
                            // if (userObj.upcoming === 'no') {
                                return (
                                    <>
                                        {/* <div className="css-uwwqev" key={index}>
                                            <div className="css-tlsx9j">
                                                <div className="css-7xb9y9">
                                                    <div className="css-11t1kfo">
                                                        <img className="img css-20rqfc" alt="" decoding="async" src={`${userObj.headImg}`} />
                                                    </div>
                                                </div>
                                                <div className="css-tb68xe">
                                                    <div className="css-gg4vpm">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <img src="/developerImg.webp" className="developerImg" alt="Developer Img"/>
                                                            </div>
                                                            <div>
                                                                <span className="css-6yyk38">{userObj.ProjectName}</span>
                                                                <small className="css-17zjzsz">by {userObj.builderName}</small>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="css-yudpbq">
                                                                <span className="rupee-icon css-1cqirzg">₹ </span>{userObj.startPrice} - {userObj.EndPrice}
                                                            </div>
                                                            <div className="css-cedndr">Price</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <div className="css-1ra0p2p">{userObj.BHk} BHK Apartments</div>
                                                            <div className="css-1klg0jz">{userObj.locality}, {userObj.city}</div>
                                                        </div>
                                                        <Link to={`/projects/view-details/${userObj.id}/${userObj.builderID.slice(1,-1)}`} target="_blank">
                                                            <button className="ViewDetails">View Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="trending-project-card">
                                            <img src={`${userObj.headImg}`} alt="project-img" className="project-img" />
                                            <img src="/developerImg.webp" alt="developer-img" className="developer-img" />
                                            <div className="project-details-content">
                                                <div>
                                                    <span className="css-6yyk38">{userObj.ProjectName}</span>
                                                    <small className="css-17zjzsz">{userObj.locality}, {userObj.city}</small>
                                                </div>
                                                <div>
                                                    <div className="css-yudpbq">
                                                        <span className="rupee-icon css-1cqirzg">₹ </span>{userObj.startPrice} - {userObj.EndPrice}
                                                    </div>
                                                    <div className="css-cedndr">{userObj.BHk} Apartment</div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <button className="ViewDetails">Schedule A Call</button>
                                                    </div>
                                                    <Link to={`/projects/view-details/${userObj.id}/${userObj.builderID.slice(1,-1)}`} target="_blank">
                                                        <button className="ViewDetails-border">View Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            // }
                        }
                    })}
                </Carousel>
            </div>
        </>
    )
}
