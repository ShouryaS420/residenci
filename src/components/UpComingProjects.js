import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

export default function UpComingProjects() {
    const responsive = {
        desktop1: {
            breakpoint: { max: 2000, min: 800 },
            items: 1.5,
            slidesToSlide: 1 // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 900, min: 500 },
            items: 2.5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1400, min: 768 },
            items: 4,
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
        return fetch("https://askresidenci.com/getProjectsDetails(1).php")
            .then((response) => response.json())
            .then((data) => setTrendingProjects(data));
    }
    useEffect(() => {
        fetchData();
    },[]);

    const [builder, setBuilder] = useState(null);

    return (
        <>
            <div className="carouselCard">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={1500}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {trendingProjects && trendingProjects.length > 0 && trendingProjects.slice(0, 13).map((userObj, index) => {
                        if (userObj.ProjectName !== '' && userObj.upcoming !== 'no') {

                            // useEffect(() => {
                                // Fetch project localities using the PHP API
                            const fetchData2 = () => {
                                return fetch(`https://askresidenci.com/getDeveloperDetails.php`)
                                    .then(response => response.json())
                                    .then(data => {
                                        setBuilder(data);
                                    })
                                    .catch(error => console.error('Error fetching developer:', error));
                            }
                            // });
                            return (
                                <div className="UpComingProjectsCard">
                                    <img src="https://newprojects.99acres.com/projects/merlin_group/merlin_serenia/images/ry0my6w2_large.jpg" alt="img" />
                                    <span className="css-6yyk38">{userObj.ProjectName}</span>
                                    <div className="up-coming-project-content">
                                        <div className="up-coming-project-content-bg">
                                            <div className="d-grid" style={{ position: 'relative', top: '-19px', left: '10px', }}>
                                                <img src="/developerImg.webp" alt="developer-img" className="developer-img" />
                                                <span className="css-6yyk381">{userObj.builderName}</span>
                                            </div>
                                            <div>
                                                <div className="css-yudpbq">
                                                    <span className="rupee-icon css-1cqirzg">₹ </span>{userObj.startPrice} - {userObj.EndPrice}
                                                </div>
                                                <div className="css-cedndr">{userObj.BHk} BHK Apartment</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between" style={{ width: '20.5rem', }}>
                                                <div>
                                                    <button className="ViewDetails">Schedule A Call</button>
                                                </div>
                                                <Link to={`/projects/view-details/${userObj.id}/${userObj.builderID.slice(1,-1)}`} target="_blank">
                                                    <button className="ViewDetails-border">View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </Carousel>
            </div>
        </>
    )
}
