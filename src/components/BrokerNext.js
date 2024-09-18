import React from 'react'
import '../css/BrokerNext.css';

export default function BrokerNext() {
    return (
        <>
            {/* <!-- Super Agent header --> */}
                <header>
                    <div className="sa-header-container">
                        <div className="sa-header-row">
                            <div className="sa-logo">
                                <img src="/logo/brokerlogo.png" alt=""/>
                            </div>
                            {/* <div className="sa-quick-links">
                                <ul>
                                    <li><a href="#">Solutions</a></li>
                                    <li><a href="#">Resources</a></li>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Pricing</a></li>
                                </ul>
                            </div> */}
                            <div className="sa-buttons">
                                <div className="login-btn">
                                    <a href="#" className="sa-loginUser">Download App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            {/* <!-- Super Agent header end --> */}

            <div className="home-banner-lottie">
                <div className="lottie-main"></div>
            </div>
                
            {/* <!-- Hero Section --> */}
                <section className="sa-hero-section">
                    <div className="sa-contaier">
                        <div className="sa-row">
                            <div className="sa-right-content">
                                <div className="online-business-wrap">
                                    <div className="d-flex">
                                        <h1 className="sa-main_heading" data-v-6667a7a3="">Become a Superagent</h1>
                                    </div>
                                    <p className="sa-description second">Most powerful platform for Real Estate Agents that powers your
                                        daily needs under one roof.</p>
                                    <span className="sa-linkBtn">
                                        <div>
                                            <svg width="240" height="70" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M231.111 70H8.889C4 70 0 66.062 0 61.25V8.75C0 3.937 4 0 8.889 0H231.11C236 0 240 3.937 240 8.75v52.5c0 4.813-4 8.75-8.889 8.75" fill="#000"></path>
                                                <path d="M84.299 17.926c0 1.466-.442 2.634-1.325 3.505-1.003 1.036-2.311 1.554-3.919 1.554-1.54 0-2.848-.525-3.925-1.577-1.078-1.05-1.616-2.353-1.616-3.908 0-1.555.538-2.857 1.616-3.909 1.077-1.05 2.386-1.576 3.925-1.576.764 0 1.495.147 2.19.44.694.294 1.251.685 1.668 1.174l-.938.923c-.706-.83-1.678-1.245-2.92-1.245-1.123 0-2.094.388-2.913 1.165-.82.778-1.23 1.787-1.23 3.028 0 1.242.41 2.25 1.23 3.029.82.777 1.79 1.165 2.913 1.165 1.191 0 2.184-.39 2.98-1.172.516-.51.814-1.218.894-2.127h-3.874v-1.261h5.17c.049.274.073.537.073.792" fill="#fff"></path>
                                                <path d="M84.298 17.925h-.177c-.002 1.433-.427 2.546-1.273 3.381l-.002.002v.001c-.972 1-2.22 1.498-3.79 1.5-1.5-.002-2.754-.505-3.8-1.525-1.046-1.022-1.563-2.27-1.565-3.784.002-1.516.52-2.763 1.564-3.784 1.047-1.02 2.302-1.524 3.8-1.527a5.4 5.4 0 012.12.426c.673.286 1.205.66 1.602 1.126l.136-.113-.126-.124-.937.924.125.123.137-.112c-.739-.871-1.776-1.31-3.057-1.308a4.27 4.27 0 00-3.036 1.215c-.856.809-1.285 1.875-1.284 3.154-.001 1.279.428 2.344 1.284 3.154a4.269 4.269 0 003.036 1.215c1.23.002 2.28-.41 3.105-1.224.551-.544.864-1.298.946-2.236l.017-.19h-3.89v-.91h4.991v-.176l-.175.03c.048.266.072.518.072.762h.355c0-.265-.025-.539-.077-.823l-.026-.144h-5.496v1.611h4.052v-.175l-.177-.015c-.079.88-.364 1.544-.843 2.018-.764.75-1.702 1.12-2.854 1.122-1.081-.002-1.998-.368-2.79-1.117-.783-.746-1.172-1.698-1.174-2.902.002-1.205.391-2.157 1.175-2.903.79-.748 1.708-1.115 2.79-1.116 1.201.002 2.109.393 2.783 1.183l.125.146 1.075-1.059.115-.113-.105-.123c-.437-.512-1.019-.919-1.734-1.22a5.757 5.757 0 00-2.26-.456c-1.58-.001-2.944.546-4.05 1.628-1.11 1.08-1.67 2.438-1.67 4.033 0 1.594.56 2.952 1.67 4.033 1.106 1.081 2.47 1.627 4.05 1.626 1.646.002 3.011-.537 4.047-1.608l-.128-.12.126.123c.92-.906 1.377-2.13 1.376-3.628h-.178zm8.195-4.386h-4.858v3.33h4.38v1.261h-4.38v3.33h4.858v1.29h-6.227v-10.5h6.227v1.29z" fill="#fff"></path>
                                                <path d="M92.495 13.54v-.174h-5.036v3.679h4.38v.911h-4.38v3.68h4.858v.94h-5.872v-10.15h5.872v1.115h.178v-.175.175h.177v-1.465H86.09v10.85h6.582v-1.64h-4.857v-2.98h4.38v-1.611h-4.38v-2.98h4.857v-.174h-.177zm5.78 9.21h-1.372v-9.21h-2.98v-1.29h7.331v1.29h-2.98v9.21" fill="#fff"></path>
                                                <path d="M98.275 22.75v-.174H97.08v-9.21H94.1v-.94h6.975v.94h-2.98v9.385h.179v-.175.175h.177v-9.035h2.98v-1.64h-7.686v1.64h2.98v9.21h1.726v-.175h-.177zm8.282 0v-10.5h1.37v10.5h-1.37" fill="#fff"></path>
                                                <path d="M106.557 22.75h.177V12.427h1.015v10.15h-1.192v.175h.177-.177v.175h1.548v-10.85h-1.726v10.85h.178v-.175zm7.45 0h-1.372v-9.21h-2.979v-1.29h7.33v1.29h-2.979v9.21" fill="#fff"></path>
                                                <path d="M114.007 22.75v-.175h-1.194v-9.21h-2.979v-.94h6.974v.94h-2.979v9.385h.178v-.175.175h.178v-9.035h2.979v-1.64h-7.685v1.64h2.979v9.21h1.727v-.175h-.178zm10.046-2.236c.789.787 1.755 1.18 2.898 1.18 1.142 0 2.109-.393 2.897-1.18.79-.786 1.186-1.792 1.186-3.014 0-1.221-.396-2.227-1.186-3.014-.788-.786-1.755-1.18-2.897-1.18-1.143 0-2.109.394-2.898 1.18-.789.787-1.184 1.793-1.184 3.014 0 1.222.395 2.228 1.184 3.014zm6.809.88c-1.049 1.061-2.353 1.59-3.911 1.59-1.56 0-2.864-.529-3.91-1.59-1.049-1.06-1.572-2.359-1.572-3.894 0-1.534.523-2.833 1.572-3.893 1.046-1.061 2.35-1.592 3.91-1.592 1.55 0 2.85.533 3.904 1.6 1.052 1.065 1.578 2.36 1.578 3.885 0 1.535-.525 2.833-1.571 3.893z" fill="#fff"></path>
                                                <path d="M124.052 20.514l-.126.123c.818.818 1.84 1.234 3.024 1.232 1.183.002 2.206-.414 3.024-1.232.824-.82 1.238-1.879 1.237-3.137.001-1.259-.413-2.318-1.237-3.137-.818-.819-1.841-1.234-3.024-1.232-1.184-.002-2.206.413-3.024 1.232-.823.819-1.238 1.878-1.236 3.137-.002 1.258.413 2.318 1.236 3.137l.126-.123.127-.123c-.755-.756-1.132-1.706-1.133-2.891.001-1.186.378-2.136 1.132-2.891.762-.756 1.671-1.126 2.772-1.128 1.101.002 2.012.372 2.771 1.128.755.755 1.133 1.705 1.134 2.89-.001 1.186-.379 2.136-1.134 2.892-.759.755-1.67 1.125-2.771 1.127-1.101-.002-2.01-.372-2.772-1.127l-.126.123zm6.809.879l-.127-.122c-1.019 1.028-2.266 1.536-3.784 1.538-1.519-.002-2.765-.51-3.783-1.538l-.005-.006.005.006c-1.017-1.032-1.519-2.276-1.52-3.771.001-1.496.503-2.74 1.52-3.772 1.018-1.028 2.264-1.537 3.783-1.539 1.508.002 2.752.513 3.777 1.547 1.021 1.036 1.526 2.278 1.528 3.764-.002 1.495-.506 2.74-1.521 3.771l.127.122.128.121c1.078-1.09 1.623-2.44 1.621-4.014.002-1.565-.545-2.914-1.628-4.008-1.083-1.099-2.44-1.655-4.032-1.653-1.6-.002-2.961.551-4.037 1.646-1.08 1.09-1.623 2.441-1.622 4.015-.001 1.573.542 2.925 1.622 4.015l.004.005-.004-.006c1.076 1.095 2.437 1.646 4.037 1.645 1.599.002 2.96-.55 4.039-1.645l-.128-.121zm3.495 1.357v-10.5h1.668l5.184 8.168h.059l-.059-2.024V12.25h1.372v10.5h-1.431l-5.423-8.565h-.059l.059 2.025v6.54h-1.37" fill="#fff"></path>
                                                <path d="M134.356 22.75h.178V12.427h1.391l5.184 8.168h.341l-.064-2.201v-5.967h1.016v10.15h-1.154l-5.424-8.564h-.34l.064 2.202v6.362h-1.192v.175h.178-.178v.175h1.547v-6.718l-.059-2.026-.178.005v.175h.059v-.175l-.15.093 5.475 8.646h1.707v-10.85h-1.727v6.322l.059 2.026.178-.005v-.175h-.059v.175l.151-.093-5.236-8.25h-1.945v10.85h.178v-.175zm55.752 29.75h3.318V30.625h-3.318V52.5zm29.879-13.996l-3.802 9.485h-.114l-3.947-9.485h-3.573l5.918 13.257-3.374 7.374h3.461l9.12-20.63h-3.689zm-18.812 11.512c-1.088 0-2.603-.535-2.603-1.858 0-1.689 1.888-2.336 3.517-2.336 1.459 0 2.144.31 3.031.732-.258 2.026-2.031 3.462-3.945 3.462zm.4-11.99c-2.402 0-4.889 1.041-5.918 3.35l2.944 1.21c.629-1.21 1.801-1.605 3.031-1.605 1.715 0 3.459 1.014 3.488 2.815v.225c-.601-.338-1.886-.845-3.46-.845-3.173 0-6.405 1.717-6.405 4.926 0 2.927 2.603 4.813 5.518 4.813 2.231 0 3.46-.985 4.233-2.139h.114v1.688h3.202v-8.387c0-3.884-2.944-6.051-6.747-6.051zm-20.501 3.141h-4.719v-7.499h4.719a3.82 3.82 0 013.888 3.75c0 1.695-1.408 3.75-3.888 3.75zm-.086-10.543h-7.948V52.5h3.315v-8.289h4.633c3.677 0 7.291-2.62 7.291-6.794 0-4.174-3.614-6.794-7.291-6.794zM137.644 50.02c-2.292 0-4.21-1.889-4.21-4.483 0-2.621 1.918-4.54 4.21-4.54 2.263 0 4.038 1.918 4.038 4.54 0 2.594-1.775 4.483-4.038 4.483zm3.809-10.29h-.114c-.745-.875-2.178-1.664-3.982-1.664-3.78 0-7.245 3.27-7.245 7.47 0 4.174 3.465 7.416 7.245 7.416 1.804 0 3.237-.79 3.982-1.691h.114v1.07c0 2.849-1.546 4.371-4.038 4.371-2.033 0-3.294-1.438-3.81-2.65l-2.892 1.184c.831 1.973 3.036 4.398 6.702 4.398 3.895 0 7.189-2.256 7.189-7.753V38.517h-3.151v1.212zm5.442 12.77h3.322V30.624h-3.322V52.5zm8.22-7.217c-.086-2.876 2.263-4.341 3.952-4.341 1.318 0 2.435.648 2.807 1.579l-6.759 2.762zm10.311-2.48c-.63-1.664-2.55-4.737-6.474-4.737-3.895 0-7.131 3.017-7.131 7.443 0 4.173 3.208 7.443 7.504 7.443 3.466 0 5.471-2.087 6.301-3.299l-2.577-1.691c-.859 1.24-2.034 2.058-3.724 2.058-1.69 0-2.893-.762-3.666-2.255l10.11-4.117-.343-.846zM84.878 40.35v3.157h7.675c-.229 1.776-.83 3.073-1.747 3.975-1.117 1.1-2.864 2.312-5.928 2.312-4.726 0-8.42-3.75-8.42-8.401 0-4.652 3.694-8.402 8.42-8.402 2.549 0 4.41.987 5.785 2.256l2.262-2.227c-1.918-1.805-4.468-3.187-8.047-3.187-6.473 0-11.915 5.188-11.915 11.56 0 6.372 5.442 11.559 11.915 11.559 3.494 0 6.129-1.127 8.19-3.242 2.12-2.087 2.779-5.019 2.779-7.387 0-.733-.057-1.41-.172-1.973H84.878zm19.695 9.67c-2.291 0-4.268-1.86-4.268-4.511 0-2.678 1.977-4.511 4.268-4.511 2.291 0 4.268 1.833 4.268 4.51 0 2.651-1.977 4.512-4.268 4.512zm0-11.954c-4.182 0-7.59 3.13-7.59 7.443 0 4.285 3.408 7.443 7.59 7.443s7.59-3.158 7.59-7.443c0-4.314-3.408-7.443-7.59-7.443zM121.13 50.02c-2.291 0-4.267-1.86-4.267-4.511 0-2.678 1.976-4.511 4.267-4.511 2.291 0 4.268 1.833 4.268 4.51 0 2.651-1.977 4.512-4.268 4.512zm0-11.954c-4.182 0-7.589 3.13-7.589 7.443 0 4.285 3.407 7.443 7.589 7.443s7.59-3.158 7.59-7.443c0-4.314-3.408-7.443-7.59-7.443z" fill="#fff"></path>
                                                <path d="M18.683 13.32c-.596.53-.953 1.413-.953 2.586v-.265 38.712-.255c0 1.084.306 1.92.823 2.459l.132.124c.419.373.956.57 1.571.57.601 0 1.278-.189 1.992-.587L48.053 42.23l8.863-4.958c1.126-.63 1.758-1.442 1.864-2.27v-.002c-.106-.83-.738-1.641-1.864-2.27l-8.864-4.958L22.248 13.34c-.716-.4-1.393-.588-1.995-.588-.615 0-1.151.196-1.57.567z" fill="#00C1FF"></path>
                                                <path d="M18.685 56.682l-.132-.124c-.517-.539-.823-1.376-.823-2.46v.256V15.65v.256c0-1.173.357-2.057.953-2.587L40.71 35.002l-22.024 21.68z" fill="url(#paint0_linear_71_7069)"></path>
                                                <path d="M48.052 42.231l-7.343-7.23 7.342-7.228 8.865 4.957c1.126.63 1.758 1.442 1.863 2.27v.004c-.105.827-.737 1.64-1.863 2.269l-8.864 4.958" fill="url(#paint1_linear_71_7069)"></path>
                                                <path d="M20.254 57.251c-.615 0-1.152-.197-1.57-.569l22.024-21.68 7.343 7.229-25.805 14.433c-.714.398-1.39.587-1.992.587z" fill="url(#paint2_linear_71_7069)"></path>
                                                <path d="M40.708 35.001L18.682 13.319c.418-.37.955-.568 1.569-.568.603 0 1.28.19 1.995.589L48.05 27.773 40.708 35" fill="url(#paint3_linear_71_7069)"></path>
                                                <path d="M20.254 57.507c-.615 0-1.153-.197-1.571-.57l-.001.002a.05.05 0 00-.005-.005l-.115-.11-.011-.012.132-.13c.419.372.955.57 1.57.569.602 0 1.278-.189 1.992-.587L48.05 42.23l.165.163-.167.093L22.245 56.92c-.65.364-1.27.553-1.828.584a3.386 3.386 0 01-.163.004" fill="url(#paint4_linear_71_7069)"></path>
                                                <path d="M18.553 56.813c-.517-.54-.823-1.375-.823-2.46V54.1c0 1.083.306 1.92.823 2.459l.132.124-.132.13z" fill="url(#paint5_linear_71_7069)"></path>
                                                <path d="M48.216 42.393l-.165-.163 8.864-4.958c1.125-.63 1.757-1.441 1.863-2.269 0 .304-.069.607-.206.903-.275.595-.828 1.158-1.657 1.622l-8.699 4.865" fill="url(#paint6_linear_71_7069)"></path>
                                                <path d="M58.779 35.001c-.106-.83-.738-1.64-1.864-2.27l-8.864-4.958.165-.163 8.7 4.866c1.24.694 1.862 1.61 1.863 2.525z" fill="url(#paint7_linear_71_7069)"></path>
                                                <path d="M17.73 15.907v-.268c0-.096.003-.19.008-.282v-.004-.014c.054-.934.349-1.662.815-2.148l.13.129c-.596.53-.953 1.414-.953 2.587z" fill="url(#paint8_linear_71_7069)"></path>
                                                <path d="M48.05 27.773L22.244 13.339c-.715-.399-1.392-.588-1.995-.588-.614 0-1.15.197-1.57.568l-.13-.128c.041-.043.084-.083.127-.123l.005-.004c.415-.368.946-.565 1.555-.569h.013c.603 0 1.28.19 1.995.59l25.97 14.524-.166.163z" fill="url(#paint9_linear_71_7069)"></path>
                                                <defs>
                                                <linearGradient id="paint0_linear_71_7069" x1="31.8066" y1="15.2424" x2="13.155" y2="34.2513" gradientUnits="userSpaceOnUse"><stop stop-color="#00A0FF"></stop>
                                                    <stop offset="0.00657" stop-color="#00A1FF"></stop>
                                                    <stop offset="0.2601" stop-color="#00BEFF"></stop>
                                                    <stop offset="0.5122" stop-color="#00D2FF"></stop>
                                                    <stop offset="0.7604" stop-color="#00DFFF"></stop>
                                                    <stop offset="1" stop-color="#00E3FF"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_71_7069" x1="60.1507" y1="34.8764" x2="17.1338" y2="34.8764" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFE000"></stop>
                                                    <stop offset="0.4087" stop-color="#FFBD00"></stop>
                                                    <stop offset="0.7754" stop-color="orange"></stop>
                                                    <stop offset="1" stop-color="#FF9C00"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_71_7069" x1="44.1523" y1="41.875" x2="12.5417" y2="73.8559" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF3A44"></stop>
                                                    <stop offset="1" stop-color="#C31162"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_71_7069" x1="13.0048" y1="10.105" x2="27.0926" y2="24.3797" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#32A071"></stop>
                                                    <stop offset="0.0685" stop-color="#2DA771"></stop>
                                                    <stop offset="0.4762" stop-color="#15CF74"></stop>
                                                    <stop offset="0.8009" stop-color="#06E775"></stop>
                                                    <stop offset="1" stop-color="#00F076"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint4_linear_71_7069" x1="44.1356" y1="46.8899" x2="18.8234" y2="72.6871" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#CC2E36"></stop>
                                                    <stop offset="1" stop-color="#9C0E4E"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint5_linear_71_7069" x1="20.6647" y1="15.2422" x2="4.23285" y2="31.9891" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#008DE0"></stop>
                                                    <stop offset="0.00657" stop-color="#008DE0"></stop>
                                                    <stop offset="0.2601" stop-color="#00A7E0"></stop>
                                                    <stop offset="0.5122" stop-color="#00B8E0"></stop>
                                                    <stop offset="0.7604" stop-color="#00C4E0"></stop>
                                                    <stop offset="1" stop-color="#00C7E0"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint6_linear_71_7069" x1="60.1495" y1="35.0017" x2="17.1325" y2="35.0017" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#E0C500"></stop>
                                                    <stop offset="0.4087" stop-color="#E0A600"></stop>
                                                    <stop offset="0.7754" stop-color="#E09100"></stop>
                                                    <stop offset="1" stop-color="#E08900"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint7_linear_71_7069" x1="60.1502" y1="35.0027" x2="17.1334" y2="35.0027" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFE840"></stop>
                                                    <stop offset="0.4087" stop-color="#FFCE40"></stop>
                                                    <stop offset="0.7754" stop-color="#FFBC40"></stop>
                                                    <stop offset="1" stop-color="#FFB540"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint8_linear_71_7069" x1="20.6466" y1="15.2718" x2="4.8076" y2="30.7149" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#40B8FF"></stop>
                                                    <stop offset="0.00657" stop-color="#40B9FF"></stop>
                                                    <stop offset="0.2601" stop-color="#40CEFF"></stop>
                                                    <stop offset="0.5122" stop-color="#40DDFF"></stop>
                                                    <stop offset="0.7604" stop-color="#40E7FF"></stop>
                                                    <stop offset="1" stop-color="#40EAFF"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint9_linear_71_7069" x1="12.9717" y1="14.69" x2="24.2748" y2="26.2097" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#65B895"></stop>
                                                    <stop offset="0.0685" stop-color="#62BD95"></stop>
                                                    <stop offset="0.4762" stop-color="#50DB97"></stop>
                                                    <stop offset="0.8009" stop-color="#44ED98"></stop>
                                                    <stop offset="1" stop-color="#40F498"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="sa-left-img">
                                <img src="https://brokernetwork.app/static/bn-main.png" alt=""/>
                                <img src="http://localhost:1000/assets/img/superagent2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            {/* <!-- Hero Section end --> */}

            {/* <!-- 2 steps section --> */}
                <div className="container" id="home-page">
                    <div className="row-steps">
                        <h2 className="heading-h2">Your entrepreneurial dream is just 3 steps away!</h2>
                        <div data-w-id="9580711c-6a57-c60f-6355-60510ccb9030"
                            style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: '1', transformStyle: 'preserve-3d'}}
                            className="home-usecases-tabs-menu w-tab-menu" role="tablist">
                            <a className="home-usecases-tabs-link w-inline-block w-tab-link show" href="#w-tabs-1-data-w-pane">
                                <div>CBCs</div>
                            </a>
                            <a className="home-usecases-tabs-link w-inline-block w-tab-link" href="#w-tabs-2-data-w-pane">
                                <div>SaaS</div>
                            </a>
                            <a className="home-usecases-tabs-link w-inline-block w-tab-link" href="#w-tabs-3-data-w-pane">
                                <div>Brands</div>
                            </a>
                            <a className="home-usecases-tabs-link w-inline-block w-tab-link" href="#w-tabs-4-data-w-pane">
                                <div>DevRel</div>
                            </a>
                            <a className="home-usecases-tabs-link w-inline-block w-tab-link" href="#w-tabs-5-data-w-pane">
                                <div>Internal</div>
                            </a>
                            <a className="home-usecases-tabs-link w-inline-block w-tab-link" href="#w-tabs-6-data-w-pane">
                                <div>Creator</div>
                            </a>
                        </div>
                        <div className="home-usecases-tabs-content show w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-0">
                            <div className="home-usecases-tabs-content-main">
                                <div className="home-usecases-tabs-content-title">
                                    <h3 className="text-size-small text-weight-normal text-color-grey">1 SCENES&nbsp;FOR&nbsp;CBCs</h3>
                                    <p className="heading-medium text-weight-medium">Give your students an online campus experience.<br/></p>
                                </div>
                                <img width="770.5" id="w-node-_94c6c264-a25d-2f2e-8aa8-7059c3caae02-4ec08285"
                                    src="https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1439px) 44vw, 496px"
                                    alt="scenes for CBCs" className="home-usecases-tabs-content-image" />
                                <div className="home-usecases-tabs-content-cta">
                                    <p className="text-size-small margin-bottom margin-small">Learning is and always has been a social
                                        experience. With Scenes, host your e-learning community in the same place as your course
                                        materials. Gamify the learning experience using in-community coins and leaderboards.<br/></p>
                                    <a href="#" target="_blank" className="button-primary w-button">See an Example</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-usecases-tabs-content w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-1">
                            <div className="home-usecases-tabs-content-main">
                                <div className="home-usecases-tabs-content-title">
                                    <h3 className="text-size-small text-weight-normal text-color-grey">2 SCENES&nbsp;FOR&nbsp;CBCs</h3>
                                    <p className="heading-medium text-weight-medium">Give your students an online campus experience.<br/></p>
                                </div>
                                <img width="770.5" id="w-node-_94c6c264-a25d-2f2e-8aa8-7059c3caae02-4ec08285"
                                    src="https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1439px) 44vw, 496px"
                                    alt="scenes for CBCs" className="home-usecases-tabs-content-image" />
                                <div className="home-usecases-tabs-content-cta">
                                    <p className="text-size-small margin-bottom margin-small">Learning is and always has been a social
                                        experience. With Scenes, host your e-learning community in the same place as your course
                                        materials. Gamify the learning experience using in-community coins and leaderboards.<br/></p>
                                    <a href="#" target="_blank" className="button-primary w-button">See an Example</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-usecases-tabs-content w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-2">
                            <div className="home-usecases-tabs-content-main">
                                <div className="home-usecases-tabs-content-title">
                                    <h3 className="text-size-small text-weight-normal text-color-grey">3 SCENES&nbsp;FOR&nbsp;CBCs</h3>
                                    <p className="heading-medium text-weight-medium">Give your students an online campus experience.<br/></p>
                                </div>
                                <img width="770.5" id="w-node-_94c6c264-a25d-2f2e-8aa8-7059c3caae02-4ec08285"
                                    src="https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1439px) 44vw, 496px"
                                    alt="scenes for CBCs" className="home-usecases-tabs-content-image" />
                                <div className="home-usecases-tabs-content-cta">
                                    <p className="text-size-small margin-bottom margin-small">Learning is and always has been a social
                                        experience. With Scenes, host your e-learning community in the same place as your course
                                        materials. Gamify the learning experience using in-community coins and leaderboards.<br/></p>
                                    <a href="#" target="_blank" className="button-primary w-button">See an Example</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-usecases-tabs-content w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-3">
                            <div className="home-usecases-tabs-content-main">
                                <div className="home-usecases-tabs-content-title">
                                    <h3 className="text-size-small text-weight-normal text-color-grey">4 SCENES&nbsp;FOR&nbsp;CBCs</h3>
                                    <p className="heading-medium text-weight-medium">Give your students an online campus experience.<br />
                                    </p>
                                </div>
                                <img width="770.5" id="w-node-_94c6c264-a25d-2f2e-8aa8-7059c3caae02-4ec08285"
                                    src="https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1439px) 44vw, 496px"
                                    alt="scenes for CBCs" className="home-usecases-tabs-content-image" />
                                <div className="home-usecases-tabs-content-cta">
                                    <p className="text-size-small margin-bottom margin-small">Learning is and always has been a social
                                        experience. With Scenes, host your e-learning community in the same place as your course
                                        materials. Gamify the learning experience using in-community coins and leaderboards.<br/></p>
                                    <a href="#" target="_blank" className="button-primary w-button">See an Example</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-usecases-tabs-content w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-4">
                            <div className="home-usecases-tabs-content-main">
                                <div className="home-usecases-tabs-content-title">
                                    <h3 className="text-size-small text-weight-normal text-color-grey">5 SCENES&nbsp;FOR&nbsp;CBCs</h3>
                                    <p className="heading-medium text-weight-medium">Give your students an online campus experience.<br/></p>
                                </div>
                                <img width="770.5" id="w-node-_94c6c264-a25d-2f2e-8aa8-7059c3caae02-4ec08285"
                                    src="https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1439px) 44vw, 496px"
                                    alt="scenes for CBCs" className="home-usecases-tabs-content-image" />
                                <div className="home-usecases-tabs-content-cta">
                                    <p className="text-size-small margin-bottom margin-small">Learning is and always has been a social
                                        experience. With Scenes, host your e-learning community in the same place as your course
                                        materials. Gamify the learning experience using in-community coins and leaderboards.<br/></p>
                                    <a href="#" target="_blank" className="button-primary w-button">See an Example</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-usecases-tabs-content w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-5">
                            <div className="home-usecases-tabs-content-main">
                                <div className="home-usecases-tabs-content-title">
                                    <h3 className="text-size-small text-weight-normal text-color-grey">6 SCENES&nbsp;FOR&nbsp;CBCs</h3>
                                    <p className="heading-medium text-weight-medium">Give your students an online campus experience.<br/></p>
                                </div>
                                <img width="770.5" id="w-node-_94c6c264-a25d-2f2e-8aa8-7059c3caae02-4ec08285"
                                    src="https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 90vw, (max-width: 1439px) 44vw, 496px"
                                    alt="scenes for CBCs" className="home-usecases-tabs-content-image" />
                                <div className="home-usecases-tabs-content-cta">
                                    <p className="text-size-small margin-bottom margin-small">Learning is and always has been a social
                                        experience. With Scenes, host your e-learning community in the same place as your course
                                        materials. Gamify the learning experience using in-community coins and leaderboards.<br/></p>
                                    <a href="#" target="_blank" className="button-primary w-button">See an Example</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- 2 steps section end --> */}

            {/* <!-- E-commerce made --> */}
            <div className="container" id="home-page">
                <h2 className="heading-h2">E-commerce, made (incredibly) easy</h2>
                <div className="home-tool-banner-inner">
                    <div className="home-tool-banner-box">
                        <div style={{width:'140%',height:'100%',overflow:'hidden',margin:'0 auto',outline:'none'}} title="" role="button"
                            aria-label="animation" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                                preserveAspectRatio="xMidYMid slice"
                                style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                                <defs>
                                    <clipPath id="__lottie_element_10">
                                        <rect width="64" height="64" x="0" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="__lottie_element_12">
                                        <path d="M0,0 L64,0 L64,64 L0,64z"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_10)">
                                    <g clipPath="url(#__lottie_element_12)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                                        style={{display: 'block'}}>
                                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,37.374000549316406,35.8120002746582)">
                                                <path fill="rgb(250,183,59)" fillOpacity="1"
                                                    d=" M0,-20.055999755859375 C11.42300033569336,-20.055999755859375 20.683000564575195,-11.07699966430664 20.683000564575195,0 C20.683000564575195,11.07699966430664 11.42300033569336,20.055999755859375 0,20.055999755859375 C-11.42300033569336,20.055999755859375 -20.683000564575195,11.07699966430664 -20.683000564575195,0 C-20.683000564575195,-11.07699966430664 -11.42300033569336,-20.055999755859375 0,-20.055999755859375z">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,39.96200180053711,35.499000549316406)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="3"
                                                    d=" M-19.038000106811523,-12.692000389099121 C-15.178999900817871,-17.829999923706055 -9.03600025177002,-21.152999877929688 -2.115000009536743,-21.152999877929688 C9.567000389099121,-21.152999877929688 19.038000106811523,-11.682999610900879 19.038000106811523,0 C19.038000106811523,11.682000160217285 9.567000389099121,21.152999877929688 -2.115000009536743,21.152999877929688 C-8.626999855041504,21.152999877929688 -14.451000213623047,18.209999084472656 -18.33099937438965,13.581999778747559">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M32.64400100708008,14.345999717712402 C32.64400100708008,14.345999717712402 32.64400100708008,8.704999923706055 32.64400100708008,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M46.30699920654297,8 C46.30699920654297,8 29.384000778198242,8 29.384000778198242,8">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M42.819000244140625,14.345999717712402 C42.819000244140625,14.345999717712402 42.819000244140625,8.704999923706055 42.819000244140625,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path fill="rgb(255,255,255)" fillOpacity="1"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                                                        strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                        strokeWidth="2.4"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,43.65999984741211,28.60300064086914)">
                                                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                        stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="2.7"
                                                        d=" M2.6459999084472656,-2.9760000705718994 C2.6459999084472656,-2.9760000705718994 -2.6459999084472656,2.9760000705718994 -2.6459999084472656,2.9760000705718994">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,32,32)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-24.375,-2.25 C-24.375,-2.25 -8.875,-2.25 -8.875,-2.25"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-28.75,3.625 C-28.75,3.625 -12.875,3.625 -12.875,3.625"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5" d=" M-23.125,9.125 C-23.125,9.125 -7.5,9.125 -7.5,9.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for
                            yourself!</p>
                    </div>
                    <div className="home-tool-banner-box">
                        <div style={{width:'100%',height:'100%',overflow:'hidden',margin:'0 auto',outline:'none'}} title="" role="button"
                            aria-label="animation" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                                preserveAspectRatio="xMidYMid slice"
                                style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                                <defs>
                                    <clipPath id="__lottie_element_10">
                                        <rect width="64" height="64" x="0" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="__lottie_element_12">
                                        <path d="M0,0 L64,0 L64,64 L0,64z"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_10)">
                                    <g clipPath="url(#__lottie_element_12)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                                        style={{display: 'block'}}>
                                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,37.374000549316406,35.8120002746582)">
                                                <path fill="rgb(250,183,59)" fillOpacity="1"
                                                    d=" M0,-20.055999755859375 C11.42300033569336,-20.055999755859375 20.683000564575195,-11.07699966430664 20.683000564575195,0 C20.683000564575195,11.07699966430664 11.42300033569336,20.055999755859375 0,20.055999755859375 C-11.42300033569336,20.055999755859375 -20.683000564575195,11.07699966430664 -20.683000564575195,0 C-20.683000564575195,-11.07699966430664 -11.42300033569336,-20.055999755859375 0,-20.055999755859375z">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,39.96200180053711,35.499000549316406)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="3"
                                                    d=" M-19.038000106811523,-12.692000389099121 C-15.178999900817871,-17.829999923706055 -9.03600025177002,-21.152999877929688 -2.115000009536743,-21.152999877929688 C9.567000389099121,-21.152999877929688 19.038000106811523,-11.682999610900879 19.038000106811523,0 C19.038000106811523,11.682000160217285 9.567000389099121,21.152999877929688 -2.115000009536743,21.152999877929688 C-8.626999855041504,21.152999877929688 -14.451000213623047,18.209999084472656 -18.33099937438965,13.581999778747559">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M32.64400100708008,14.345999717712402 C32.64400100708008,14.345999717712402 32.64400100708008,8.704999923706055 32.64400100708008,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M46.30699920654297,8 C46.30699920654297,8 29.384000778198242,8 29.384000778198242,8">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M42.819000244140625,14.345999717712402 C42.819000244140625,14.345999717712402 42.819000244140625,8.704999923706055 42.819000244140625,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path fill="rgb(255,255,255)" fillOpacity="1"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                                                        strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                        strokeWidth="2.4"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,43.65999984741211,28.60300064086914)">
                                                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                        stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="2.7"
                                                        d=" M2.6459999084472656,-2.9760000705718994 C2.6459999084472656,-2.9760000705718994 -2.6459999084472656,2.9760000705718994 -2.6459999084472656,2.9760000705718994">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,32,32)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-24.375,-2.25 C-24.375,-2.25 -8.875,-2.25 -8.875,-2.25"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-28.75,3.625 C-28.75,3.625 -12.875,3.625 -12.875,3.625"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5" d=" M-23.125,9.125 C-23.125,9.125 -7.5,9.125 -7.5,9.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for
                            yourself!</p>
                    </div>
                    <div className="home-tool-banner-box">
                        <div style={{width:'100%',height:'100%',overflow:'hidden',margin:'0 auto',outline:'none'}} title="" role="button"
                            aria-label="animation" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                                preserveAspectRatio="xMidYMid slice"
                                style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                                <defs>
                                    <clipPath id="__lottie_element_10">
                                        <rect width="64" height="64" x="0" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="__lottie_element_12">
                                        <path d="M0,0 L64,0 L64,64 L0,64z"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_10)">
                                    <g clipPath="url(#__lottie_element_12)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                                        style={{display: 'block'}}>
                                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,37.374000549316406,35.8120002746582)">
                                                <path fill="rgb(250,183,59)" fillOpacity="1"
                                                    d=" M0,-20.055999755859375 C11.42300033569336,-20.055999755859375 20.683000564575195,-11.07699966430664 20.683000564575195,0 C20.683000564575195,11.07699966430664 11.42300033569336,20.055999755859375 0,20.055999755859375 C-11.42300033569336,20.055999755859375 -20.683000564575195,11.07699966430664 -20.683000564575195,0 C-20.683000564575195,-11.07699966430664 -11.42300033569336,-20.055999755859375 0,-20.055999755859375z">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,39.96200180053711,35.499000549316406)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="3"
                                                    d=" M-19.038000106811523,-12.692000389099121 C-15.178999900817871,-17.829999923706055 -9.03600025177002,-21.152999877929688 -2.115000009536743,-21.152999877929688 C9.567000389099121,-21.152999877929688 19.038000106811523,-11.682999610900879 19.038000106811523,0 C19.038000106811523,11.682000160217285 9.567000389099121,21.152999877929688 -2.115000009536743,21.152999877929688 C-8.626999855041504,21.152999877929688 -14.451000213623047,18.209999084472656 -18.33099937438965,13.581999778747559">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M32.64400100708008,14.345999717712402 C32.64400100708008,14.345999717712402 32.64400100708008,8.704999923706055 32.64400100708008,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M46.30699920654297,8 C46.30699920654297,8 29.384000778198242,8 29.384000778198242,8">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M42.819000244140625,14.345999717712402 C42.819000244140625,14.345999717712402 42.819000244140625,8.704999923706055 42.819000244140625,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path fill="rgb(255,255,255)" fillOpacity="1"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                                                        strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                        strokeWidth="2.4"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,43.65999984741211,28.60300064086914)">
                                                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                        stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="2.7"
                                                        d=" M2.6459999084472656,-2.9760000705718994 C2.6459999084472656,-2.9760000705718994 -2.6459999084472656,2.9760000705718994 -2.6459999084472656,2.9760000705718994">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,32,32)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-24.375,-2.25 C-24.375,-2.25 -8.875,-2.25 -8.875,-2.25"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-28.75,3.625 C-28.75,3.625 -12.875,3.625 -12.875,3.625"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5" d=" M-23.125,9.125 C-23.125,9.125 -7.5,9.125 -7.5,9.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for
                            yourself!</p>
                    </div>
                    <div className="home-tool-banner-box">
                        <div style={{width:'100%',height:'100%',overflow:'hidden',margin:'0 auto',outline:'none'}} title="" role="button"
                            aria-label="animation" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                                preserveAspectRatio="xMidYMid slice"
                                style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                                <defs>
                                    <clipPath id="__lottie_element_10">
                                        <rect width="64" height="64" x="0" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="__lottie_element_12">
                                        <path d="M0,0 L64,0 L64,64 L0,64z"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_10)">
                                    <g clipPath="url(#__lottie_element_12)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                                        style={{display: 'block'}}>
                                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,37.374000549316406,35.8120002746582)">
                                                <path fill="rgb(250,183,59)" fillOpacity="1"
                                                    d=" M0,-20.055999755859375 C11.42300033569336,-20.055999755859375 20.683000564575195,-11.07699966430664 20.683000564575195,0 C20.683000564575195,11.07699966430664 11.42300033569336,20.055999755859375 0,20.055999755859375 C-11.42300033569336,20.055999755859375 -20.683000564575195,11.07699966430664 -20.683000564575195,0 C-20.683000564575195,-11.07699966430664 -11.42300033569336,-20.055999755859375 0,-20.055999755859375z">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,39.96200180053711,35.499000549316406)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="3"
                                                    d=" M-19.038000106811523,-12.692000389099121 C-15.178999900817871,-17.829999923706055 -9.03600025177002,-21.152999877929688 -2.115000009536743,-21.152999877929688 C9.567000389099121,-21.152999877929688 19.038000106811523,-11.682999610900879 19.038000106811523,0 C19.038000106811523,11.682000160217285 9.567000389099121,21.152999877929688 -2.115000009536743,21.152999877929688 C-8.626999855041504,21.152999877929688 -14.451000213623047,18.209999084472656 -18.33099937438965,13.581999778747559">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M32.64400100708008,14.345999717712402 C32.64400100708008,14.345999717712402 32.64400100708008,8.704999923706055 32.64400100708008,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M46.30699920654297,8 C46.30699920654297,8 29.384000778198242,8 29.384000778198242,8">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M42.819000244140625,14.345999717712402 C42.819000244140625,14.345999717712402 42.819000244140625,8.704999923706055 42.819000244140625,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path fill="rgb(255,255,255)" fillOpacity="1"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                                                        strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                        strokeWidth="2.4"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,43.65999984741211,28.60300064086914)">
                                                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                        stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="2.7"
                                                        d=" M2.6459999084472656,-2.9760000705718994 C2.6459999084472656,-2.9760000705718994 -2.6459999084472656,2.9760000705718994 -2.6459999084472656,2.9760000705718994">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,32,32)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-24.375,-2.25 C-24.375,-2.25 -8.875,-2.25 -8.875,-2.25"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-28.75,3.625 C-28.75,3.625 -12.875,3.625 -12.875,3.625"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5" d=" M-23.125,9.125 C-23.125,9.125 -7.5,9.125 -7.5,9.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for
                            yourself!</p>
                    </div>
                    <div className="home-tool-banner-box">
                        <div style={{width:'100%',height:'100%',overflow:'hidden',margin:'0 auto',outline:'none'}} title="" role="button"
                            aria-label="animation" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                                preserveAspectRatio="xMidYMid slice"
                                style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                                <defs>
                                    <clipPath id="__lottie_element_10">
                                        <rect width="64" height="64" x="0" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="__lottie_element_12">
                                        <path d="M0,0 L64,0 L64,64 L0,64z"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_10)">
                                    <g clipPath="url(#__lottie_element_12)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                                        style={{display: 'block'}}>
                                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,37.374000549316406,35.8120002746582)">
                                                <path fill="rgb(250,183,59)" fillOpacity="1"
                                                    d=" M0,-20.055999755859375 C11.42300033569336,-20.055999755859375 20.683000564575195,-11.07699966430664 20.683000564575195,0 C20.683000564575195,11.07699966430664 11.42300033569336,20.055999755859375 0,20.055999755859375 C-11.42300033569336,20.055999755859375 -20.683000564575195,11.07699966430664 -20.683000564575195,0 C-20.683000564575195,-11.07699966430664 -11.42300033569336,-20.055999755859375 0,-20.055999755859375z">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,39.96200180053711,35.499000549316406)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="3"
                                                    d=" M-19.038000106811523,-12.692000389099121 C-15.178999900817871,-17.829999923706055 -9.03600025177002,-21.152999877929688 -2.115000009536743,-21.152999877929688 C9.567000389099121,-21.152999877929688 19.038000106811523,-11.682999610900879 19.038000106811523,0 C19.038000106811523,11.682000160217285 9.567000389099121,21.152999877929688 -2.115000009536743,21.152999877929688 C-8.626999855041504,21.152999877929688 -14.451000213623047,18.209999084472656 -18.33099937438965,13.581999778747559">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M32.64400100708008,14.345999717712402 C32.64400100708008,14.345999717712402 32.64400100708008,8.704999923706055 32.64400100708008,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M46.30699920654297,8 C46.30699920654297,8 29.384000778198242,8 29.384000778198242,8">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M42.819000244140625,14.345999717712402 C42.819000244140625,14.345999717712402 42.819000244140625,8.704999923706055 42.819000244140625,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path fill="rgb(255,255,255)" fillOpacity="1"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                                                        strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                        strokeWidth="2.4"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,43.65999984741211,28.60300064086914)">
                                                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                        stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="2.7"
                                                        d=" M2.6459999084472656,-2.9760000705718994 C2.6459999084472656,-2.9760000705718994 -2.6459999084472656,2.9760000705718994 -2.6459999084472656,2.9760000705718994">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,32,32)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-24.375,-2.25 C-24.375,-2.25 -8.875,-2.25 -8.875,-2.25"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-28.75,3.625 C-28.75,3.625 -12.875,3.625 -12.875,3.625"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5" d=" M-23.125,9.125 C-23.125,9.125 -7.5,9.125 -7.5,9.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for
                            yourself!</p>
                    </div>
                    <div className="home-tool-banner-box">
                        <div style={{width:'100%',height:'100%',overflow:'hidden',margin:'0 auto',outline:'none'}} title="" role="button"
                            aria-label="animation" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                                preserveAspectRatio="xMidYMid slice"
                                style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                                <defs>
                                    <clipPath id="__lottie_element_10">
                                        <rect width="64" height="64" x="0" y="0"></rect>
                                    </clipPath>
                                    <clipPath id="__lottie_element_12">
                                        <path d="M0,0 L64,0 L64,64 L0,64z"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_10)">
                                    <g clipPath="url(#__lottie_element_12)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                                        style={{display: 'block'}}>
                                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,37.374000549316406,35.8120002746582)">
                                                <path fill="rgb(250,183,59)" fillOpacity="1"
                                                    d=" M0,-20.055999755859375 C11.42300033569336,-20.055999755859375 20.683000564575195,-11.07699966430664 20.683000564575195,0 C20.683000564575195,11.07699966430664 11.42300033569336,20.055999755859375 0,20.055999755859375 C-11.42300033569336,20.055999755859375 -20.683000564575195,11.07699966430664 -20.683000564575195,0 C-20.683000564575195,-11.07699966430664 -11.42300033569336,-20.055999755859375 0,-20.055999755859375z">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,39.96200180053711,35.499000549316406)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="3"
                                                    d=" M-19.038000106811523,-12.692000389099121 C-15.178999900817871,-17.829999923706055 -9.03600025177002,-21.152999877929688 -2.115000009536743,-21.152999877929688 C9.567000389099121,-21.152999877929688 19.038000106811523,-11.682999610900879 19.038000106811523,0 C19.038000106811523,11.682000160217285 9.567000389099121,21.152999877929688 -2.115000009536743,21.152999877929688 C-8.626999855041504,21.152999877929688 -14.451000213623047,18.209999084472656 -18.33099937438965,13.581999778747559">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M32.64400100708008,14.345999717712402 C32.64400100708008,14.345999717712402 32.64400100708008,8.704999923706055 32.64400100708008,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M46.30699920654297,8 C46.30699920654297,8 29.384000778198242,8 29.384000778198242,8">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                    stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="3"
                                                    d=" M42.819000244140625,14.345999717712402 C42.819000244140625,14.345999717712402 42.819000244140625,8.704999923706055 42.819000244140625,8.704999923706055">
                                                </path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path fill="rgb(255,255,255)" fillOpacity="1"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1"
                                                    transform="matrix(1,0,0,1,37.845001220703125,35.499000549316406)">
                                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                                                        strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                        strokeWidth="2.4"
                                                        d=" M0,-4.020999908447266 C2.2200000286102295,-4.020999908447266 4.019999980926514,-2.2209999561309814 4.019999980926514,-0.0010000000474974513 C4.019999980926514,2.2200000286102295 2.2200000286102295,4.020999908447266 0,4.020999908447266 C-2.2200000286102295,4.020999908447266 -4.019999980926514,2.2200000286102295 -4.019999980926514,-0.0010000000474974513 C-4.019999980926514,-2.2209999561309814 -2.2200000286102295,-4.020999908447266 0,-4.020999908447266z">
                                                    </path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,43.65999984741211,28.60300064086914)">
                                                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                                                        stroke="rgb(26,24,30)" strokeOpacity="1" strokeWidth="2.7"
                                                        d=" M2.6459999084472656,-2.9760000705718994 C2.6459999084472656,-2.9760000705718994 -2.6459999084472656,2.9760000705718994 -2.6459999084472656,2.9760000705718994">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,32,32)" opacity="1" style={{display: 'block'}}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-24.375,-2.25 C-24.375,-2.25 -8.875,-2.25 -8.875,-2.25"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5"
                                                    d=" M-28.75,3.625 C-28.75,3.625 -12.875,3.625 -12.875,3.625"></path>
                                            </g>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0"
                                                    strokeMiterlimit="4" stroke="rgb(26,24,30)" strokeOpacity="1"
                                                    strokeWidth="2.5" d=" M-23.125,9.125 C-23.125,9.125 -7.5,9.125 -7.5,9.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for
                            yourself!</p>
                    </div>
                </div>
            </div>
            {/* <!-- E-commerce made --> */}

            {/* <!-- video section --> */}
                <div className="container" id="home-page">
                    <h2 className="heading-h2">Watch Scenes in action.</h2>
                    <div className="home-videos-columns">
                        <div id="w-node-e4966445-c347-4f79-7e40-7e6203f793a9-4ec08285" className="home-videos-clip-wrapper">
                            <div className="home-videos-clip w-embed">
                                <div id="youtube-player" className="youtube-player" data-id="hy_ledLYga8" data-related="0"
                                    data-control="1" data-info="0" data-fullscreen="1"
                                    style={{width:'100%',display: 'block', position: 'relative',cursor: 'pointer', maxHeight:'360px',height:'100%', overflow:'hidden',paddingBottom:'56.25%',margin:'0 auto'}}>
                                    <div id="show_hide" style={{display: 'none'}}>
                                        <video className="stories__story-item" style={{width: '100%',height: '100%',position: 'absolute',top: '0',left: '0'}} id="play_video" src="assets\img\Scenes - The Ultimate Community Platform - Mobile App Demo.MP4" type="video/mp4" controls></video>
                                    </div>
                                    <img id="hideTwo1" src="//i.ytimg.com/vi/hy_ledLYga8/hqdefault.jpg" style={{bottom: '-100%', display: 'block', left: '0', margin: 'auto', maxWidth: '100%', width: '100%',height:'auto', position: 'absolute', right: '0', top: '-100%'}} />
                                    <div id="hideTwo2" style={{height: '72px', width: '72px', left: '50%', top: '50%', marginLeft: '-36px', marginTop: '-36px', position: 'absolute', background: "url('http://i.imgur.com/TxzC70f.png') no-repeat"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- video section end --> */}

            {/* <!-- footer section --> */}
                <footer className="footer2">
                    <div className="container-footer">
                        <div className="row justify-content-center">
                            <div className="footer-bottom">
                                <div className="footer-bottom-inner">
                                    <div className="footer-top">
                                        <div className="left-top-footer">
                                            <h4>Try Hologram today</h4>
                                            <ul>
                                                <li><i className="fa-solid fa-check"></i><span>Free SIM</span></li>
                                                <li><i className="fa-solid fa-check"></i><span>1 MB/mo free</span></li>
                                                <li><i className="fa-solid fa-check"></i><span>Connect and scale in Days</span></li>
                                            </ul>
                                        </div>
                                        <div className="right-top-footer">
                                            <div className="login-btn">
                                                <button>Log in <i className="fa-solid fa-arrow-right-long"></i></button>
                                            </div>
                                            <div className="freeTrial-btn">
                                                <button>Start Free Trial <i className="fa-solid fa-arrow-right-long"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-logo">
                                        <img src="https://storagecdn.superagent.me/websiteAssets%2Fimages%2FnewLogoBlue.svg?alt=medias" alt="" />
                                    </div>
                                    <div className="footer-useful-links">
                                        <div className="links-1">
                                            <span>Get Connected</span>
                                            <ul>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                            </ul>
                                        </div>
                                        <div className="links-2">
                                            <span>Resources</span>
                                            <ul>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                            </ul>
                                        </div>
                                        <div className="links-3">
                                            <span>Pricing</span>
                                            <ul>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                            </ul>
                                        </div>
                                        <div className="links-4">
                                            <span>Developers</span>
                                            <ul>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                            </ul>
                                        </div>
                                        <div className="links-5">
                                            <span>Company</span>
                                            <ul>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                            </ul>
                                        </div>
                                        <div className="links-6">
                                            <span>Social</span>
                                            <ul>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                                <li><a href="#">Connectivity</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="ver-line"></div>
                                <div className="footer-copyright-bottom">
                                    <div className="left">
                                        <span>&copy;2022 SuperAgent.me</span>
                                        <span>
                                            <a href="#">Terms</a>
                                            <a href="#">Privacy</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            {/* <!-- footer section end --> */}

        </>
    )
}
