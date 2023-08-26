import React from 'react';

export default function Footer() {
    return (
        <>
            <div className="container1 NewsLetter">
                <h5>Subscribe NewsLetter</h5>
                <div className="NewsLetterDiv">
                    <form className="autoCompleteDesktop__searchContainer">
                        <input className="autoCompleteDesktop__searchBox2 autoCompleteDesktop__searchBox2--home autoCompleteDesktop__searchBox2--nearbyVisible" placeholder="Enter Email ID Here" />
                        <button className="NewsLetterBtn">Subscribe</button>
                    </form>
                </div>
            </div>
            <footer id="Footer" className="clr footerMain">
                <div className="container1">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="asyncFooterHtml">
                                <div className="f-prt">
                                    <div className="f-tle">Tools</div>
                                    <div className="pull-left pr-20 mr-20">
                                        <span className="ft-link">Car EMI Calculator</span>
                                        <span className="ft-link">Bike EMI Calculator</span>
                                        <span className="ft-link">New Car Finance</span>
                                        <span className="ft-link">Bike Finance</span>
                                        <span className="ft-link">Car Insurance</span>
                                        <span className="ft-link">Two Wheeler Insurance</span>
                                        <span className="ft-link">Used Car Valuation</span>
                                        <span className="ft-link">Used Car Finance</span>
                                    </div>
                                </div>
                                <div className="f-prt">
                                    <div className="f-tle">Auto Enthusiasts</div>
                                    <div className="pull-left pr-20 mr-20">
                                        <span className="ft-link">News</span>
                                        <span className="ft-link">Reviews</span>
                                        <span className="ft-link">Forum</span>
                                        <span className="ft-link">Autogasm</span>
                                        <span className="ft-link">Motorsports</span>
                                        <span className="ft-link">Auto Guide</span>
                                        <span className="ft-link">Auto Write-Up</span>
                                    </div>
                                </div>
                                <div className="f-prt">
                                    <div className="f-tle">Research</div>
                                    <div className="pull-left pr-20 mr-20">
                                        <span className="ft-link">New Cars</span>
                                        <span className="ft-link">New Bikes</span>
                                        <span className="ft-link">Used Cars</span>
                                        <span className="ft-link">Sell Car</span>
                                        <span className="ft-link">Find Perfect Cars</span>
                                        <span className="ft-link">Find Perfect Bike</span>
                                        <span className="ft-link">Car Dealers</span>
                                        <span className="ft-link">Bike Showrooms</span>
                                        <span className="ft-link">Car Offers &amp; Discounts</span>
                                        <span className="ft-link">Bike Offers &amp; Discounts</span>
                                        <span className="ft-link">Car Service Centers</span>
                                        <span className="ft-link">Bike Service Centers</span>
                                        <span className="ft-link">Tyres</span>
                                    </div>
                                </div>
                                <div className="f-prt ">
                                    <div className="f-follow-box f-mr-top">
                                        <div className="f-follow-us pull-left">
                                            <div className="f-tle"> Follow Us </div>
                                            <span className="f-sl mr-10 c-p">
                                                <span className="f-sprite f-fb"></span>
                                            </span>
                                            <span className=" f-sl mr-10 c-p">
                                                <span className="f-sprite f-tw"></span>
                                            </span>
                                            <span className="f-sl mr-10 c-p">
                                                <span className="f-sprite f-insta"></span>
                                            </span>
                                            <span className="f-sl mr-10 c-p">
                                                <span className="f-sprite f-yt"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-btm clr">
                    <div className="container1">
                        <div className="f-com-logo visible-xs"></div>
                        <div className="f-f-link pull-left f-mlh">
                            <span className="c-p"> About Us</span><span>|</span>
                            {/* <span className="c-p"> Advertise With Us</span><span>|</span> */}
                            {/* <span className="c-p"> Sitemap </span><span>|</span> */}
                            <span className="c-p"> Contact Us </span><span className="hidden-xs">|</span>
                            <span className="c-p"> Terms of Use </span><span>|</span>
                            <span className="c-p"> Privacy Policy </span><span></span>
                            {/* <span className="c-p"> Apps </span> */}
                            {/* <span className="">|</span> */}
                            {/* <span className="c-p"> Feedback </span> */}
                        </div>
                    <div className="f-b-txt pull-right">Copyright © 2008-2023 Powered By <span className="c-p">Girnar Software Pvt. Ltd.</span> All Rights Reserved.</div>
                    </div>
                </div>
            </footer>
        </>
    )
}
