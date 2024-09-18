import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ServiceOffering() {
    const responsive = {
        desktop1: {
            breakpoint: { max: 2000, min: 800 },
            items: 3.2,
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
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                    <div className="ServiceOfferingCard">
                        <img src="/dummy-placeholder.png" alt="img" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}
