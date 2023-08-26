import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function ProjectsInBaner() {
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 500 },
            items: 3.8,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1400, min: 768 },
            items: 3.4,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 1400, min: 425 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const [trendingProjects, setTrendingProjects] = useState([]);

    const fetchData = () => {
        return fetch("http://82.180.136.42:5000/api/projects/fetchDetailsBySearchLocality")
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
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {trendingProjects.slice(0, 8).map((userObj, index) => {
                        if (userObj.locality === "Baner") {
                            return (
                                <>
                                    <div className="infoCard">
                                        <div className="css-fyv0ia">
                                            <div className="imgDiv">
                                                <img src={userObj.headImg} alt="img"/>
                                            </div>
                                            <div className="info">
                                                <span className="name">{userObj.ProjectName}</span>
                                                <div className="address1">{userObj.BHk} BHK Apartments</div>
                                                <div className="address2">{userObj.locality}, {userObj.city}</div>
                                                <div className="price">
                                                    <span className="rupee-icon css-1cqirzg">₹ </span>
                                                    {userObj.startPrice} - {userObj.EndPrice}
                                                </div>
                                                <Link to={`/projects/view-details/${userObj._id}/${userObj.builderID}`} target="_blank">
                                                    <button className="ViewDetails">View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        }
                    })}
                </Carousel>
            </div>
        </>
    )
}
