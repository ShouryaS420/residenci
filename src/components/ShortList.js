import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/ShortList.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ShortList() {

    const ID = localStorage.getItem("shortListID");
    const id = ID.slice(1,-1);
    const [trendingProjects, setTrendingProjects] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:5000/api/projects/fetchDetailsBySearchLocality")
            .then((response) => response.json())
            .then((data) => setTrendingProjects(data));
    }
    useEffect(() => {
        fetchData();
    },[]);

    const [projectVariants, setProjectVariants] = useState([]);

        useEffect(() => {
        const fetchProjectVariants = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/projects/fetchProjectVariantByProjectIDd/${id}/variant`); // Replace with your backend API endpoint
                setProjectVariants(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProjectVariants();
    }, [id]);


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

    return (
        <>
            <Navbar/>
                <div className="Main" style={{ display: 'block', }}>

                    <div className="shortList-heading" style={{ marginTop: '4rem', }}>
                        <div style={{ fontSize: '24px', lineHeight: '32px', fontWeight: '700', color: '#091E42', display: 'block', textAlign: 'left', verticalAlign: 'middle' }}>Shortlisted Properties ({count})</div>
                        <div style={{ fontSize: '14px', lineHeight: '20px', fontWeight: '400', color: '#42526E', display: 'block', textAlign: 'left', verticalAlign: 'middle', }}>Contact now to close the deal</div>
                    </div>

                    {trendingProjects.map((userObj, index) => {
                        if (userObj.save === "yes") {
                            return (
                                <>
                                    <div class="recomSqCardLargeActivity__recomSqCard imgHover">
                                        <div>
                                            <img src="https://mediacdn.99acres.com/media1/12125/1/242501437M-1597493729673.jpg" />
                                            <div class="recomSqCardLargeActivity__reraRegular"></div>
                                            <div class="recomSqCardLargeActivity__shortListIcn">
                                                <i class="iconS_Common_24 icon_yellowWhiteStar"></i>
                                            </div>
                                            <div class="recomSqCardLargeActivity__infoTxt">
                                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                                    {projectVariants.slice(0, 1).map(variant => (
                                                        <div class="labels_semiBold f16">₹ {variant.price}</div>
                                                    ))} &nbsp;
                                                    <span>-</span> &nbsp;
                                                    {projectVariants.slice(1, 2).map(variant => (
                                                        <div class="labels_semiBold f16">₹ {variant.price}</div>
                                                    ))}
                                                </div>
                                                <div class="spacer4"></div>
                                                <div class="badges_regular_secondary f10">Starting Price</div>
                                            </div>
                                        </div>
                                        <div class="spacer10"></div>
                                        <div>
                                            <div class="section_header_semiBold Ng800 spacer4 ellipsis">{userObj.ProjectName}</div>
                                            <div class="caption_strong_medium ellipsis">In {userObj.locality}, {userObj.city}</div>
                                            {/* <div class="caption_strong_medium ellipsis">Posted by Owner </div> */}
                                        </div>
                                        <Link to={`/projects/view-details/${userObj.id}/${userObj.builderID}`}>
                                            <button className="shortlist-button">Call To Action</button>
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                    })}
                    
                    {count === 0 && 
                        <>
                            <div class="activitiesPage__mainWrapper activitiesPage__noDataWrap">
                                <div class="spacer50"></div>
                                <div class="textC spacer32">
                                    <img src="https://static.99acres.com/universalapp/img/recentActivityHouse.png"/>
                                </div>
                                <div class="title_l_bold Ng900 textC spacer20">You haven’t shortlisted anything yet!</div>
                                <div class="body_large Ng900 textC">In case you have shortlisted something on another device/account, Login / Register to view them here</div>
                                <div class="spacer50"></div>
                            </div>
                        </>
                    }

                </div>
            <Footer/>
        </>
    )
}
