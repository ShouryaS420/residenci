import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectsInLocalityNearBySearchedLocality() {
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
                    autoPlaySpeed={1700}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div className="infoCard">
                        <div className="css-fyv0ia">
                            <div className="imgDiv">
                                <img src="https://is1-3.housingcdn.com/4f2250e8/16f37378a975ca782f687e02c4f957dc/v0/medium/nyati_elan_central_ii-wagholi-pune-nyati_group.jpeg.webp" alt="img"/>
                            </div>
                            <div className="info">
                                <span className="name">Nyati Elan Central II</span>
                                <div className="address1">1, 2, 3 BHK Apartments</div>
                                <div className="address2">Wagholi, Pune</div>
                                <div className="price">
                                    <span className="rupee-icon css-1cqirzg">₹</span>
                                    40 L - 97 L
                                </div>
                                <button className="ViewDetails">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="css-fyv0ia">
                            <div className="imgDiv">
                                <img src="https://is1-3.housingcdn.com/4f2250e8/16f37378a975ca782f687e02c4f957dc/v0/medium/nyati_elan_central_ii-wagholi-pune-nyati_group.jpeg.webp" alt="img"/>
                            </div>
                            <div className="info">
                                <span className="name">Nyati Elan Central II</span>
                                <div className="address1">1, 2, 3 BHK Apartments</div>
                                <div className="address2">Wagholi, Pune</div>
                                <div className="price">
                                    <span className="rupee-icon css-1cqirzg">₹</span>
                                    40 L - 97 L
                                </div>
                                <button className="ViewDetails">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="css-fyv0ia">
                            <div className="imgDiv">
                                <img src="https://is1-3.housingcdn.com/4f2250e8/16f37378a975ca782f687e02c4f957dc/v0/medium/nyati_elan_central_ii-wagholi-pune-nyati_group.jpeg.webp" alt="img"/>
                            </div>
                            <div className="info">
                                <span className="name">Nyati Elan Central II</span>
                                <div className="address1">1, 2, 3 BHK Apartments</div>
                                <div className="address2">Wagholi, Pune</div>
                                <div className="price">
                                    <span className="rupee-icon css-1cqirzg">₹</span>
                                    40 L - 97 L
                                </div>
                                <button className="ViewDetails">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="css-fyv0ia">
                            <div className="imgDiv">
                                <img src="https://is1-3.housingcdn.com/4f2250e8/16f37378a975ca782f687e02c4f957dc/v0/medium/nyati_elan_central_ii-wagholi-pune-nyati_group.jpeg.webp" alt="img"/>
                            </div>
                            <div className="info">
                                <span className="name">Nyati Elan Central II</span>
                                <div className="address1">1, 2, 3 BHK Apartments</div>
                                <div className="address2">Wagholi, Pune</div>
                                <div className="price">
                                    <span className="rupee-icon css-1cqirzg">₹</span>
                                    40 L - 97 L
                                </div>
                                <button className="ViewDetails">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="css-fyv0ia">
                            <div className="imgDiv">
                                <img src="https://is1-3.housingcdn.com/4f2250e8/16f37378a975ca782f687e02c4f957dc/v0/medium/nyati_elan_central_ii-wagholi-pune-nyati_group.jpeg.webp" alt="img"/>
                            </div>
                            <div className="info">
                                <span className="name">Nyati Elan Central II</span>
                                <div className="address1">1, 2, 3 BHK Apartments</div>
                                <div className="address2">Wagholi, Pune</div>
                                <div className="price">
                                    <span className="rupee-icon css-1cqirzg">₹</span>
                                    40 L - 97 L
                                </div>
                                <button className="ViewDetails">View Details</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}
