import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import axios from "axios";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

function Navbar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 392) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const [showHide, setShowHide] = useState(false);
  const showHideSideBar = (e) => {
    if (showHide >= false) {
      // alert('yes');
      setShowHide(true);
    }
    if (showHide >= true) {
      // alert('yes');
      setShowHide(false);
    }
  };
  const closeSlider = () => {
    setShowHide(false);
  };

  const number = localStorage.getItem("Username");
  const userName = localStorage.getItem("name");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://askresidenci.com/convert.php?number=${number}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [number]);

  const [formResponse, setFormResponse] = useState("");
  const handleUpdate = (event) => {
    event.preventDefault();

    const url = `https://askresidenci.com/logout.php?number=${number}`;

    axios
      .post(url)
      .then((response) => {
        if (response.data.success) {
          setFormResponse("Logout Successfull");
          // Perform further actions like redirecting to a logged-in page
          window.location.reload();
        } else {
          setFormResponse("Logout Failed");
        }
      })
      .catch((error) => {
        console.error(error);
        setFormResponse("Error verifying OTP");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://askresidenci.com/logout.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `number=${number}`,
      });

      const responseData = await response.text();
      setFormResponse(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    if (dropdown >= false) {
      // alert('yes');
      setDropdown(true);
    }
    if (dropdown >= true) {
      // alert('yes');
      setDropdown(false);
    }
  };
  const [projectDetails, setProjectDetails] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch project details from your API
    fetch("https://askresidenci.com/getProjectsDetails.php")
      .then((response) => response.json())
      .then((data) => {
        setProjectDetails(data);
        const uniqueCities = [...new Set(data.map((item) => item))];
        setCities(uniqueCities);
      })
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, []);

  const [autocomplete, setAutocomplete] = useState("");
  const onChange = (e) => {
    setAutocomplete({ ...autocomplete, [e.target.name]: e.target.value });
  };
  const [showHideDropDown, setShowHideDropDown] = useState(false);

  const handleClickSetInput = (setInput) => {
    setAutocomplete(setInput);
  };

  const [sidebar, setSidebar] = useState(false);

  if (sidebar === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      {/* {number} */}
      <div className={fix ? "navbar fixed" : "navbar"}>
        <div className="container2">
          <div className="NavbarRow">
            <div to="" className="logoDiv">
              <img src="/logo/logo (8).png" alt="Logo" className="img2" />
            </div>
          </div>
          <div className="NavbarRow1">
            <div className="tfp-cell headerPrimary__rightHeader">
              <div to="/broker-next" target="_blank" className="promoCard">
                <div className="promoCard__card promoCard__card--cta">
                  <div className="promoCard__contentWrapper">
                    <div className="promoCard__text d-text14 is-fontBold">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="barIcon"
              onClick={() => {
                setSidebar(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 512 512"
              >
                <path
                  style={{ fill: "#ffffff", marginRight: "10px" }}
                  d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="label"></div>
      </div>
      <div
        className="locality-content"
        onClick={() => setShowHideDropDown(false)}
        style={{ display: showHideDropDown ? "flex" : "none" }}
      >
        <div
          className="list"
          style={{ display: showHideDropDown ? "flex" : "none" }}
        >
          <ul>
            {cities.map((item, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      handleClickSetInput(item.locality);
                    }}
                  >
                    {item.locality}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={sidebar ? "sidebar-view" : "sidebar-view-no"}
        onClick={() => {
          setSidebar(false);
        }}
      />
      <div className={sidebar ? "view" : "view-no"}>
        {data.slice(0, 1).map((item, index) => {
          if (item.login === "yes") {
            return (
              <>
                <div className="sideMenuAuthButton__text">{userName}</div>
                <a href="#">Profile</a>
                <Link to="/short-listed/projects">Short Listing ({2}) </Link>
                <a>
                  {" "}
                  <button onClick={handleUpdate}>Sign Out</button>{" "}
                </a>
              </>
            );
          }
          if (item.login === "no") {
            return (
              <>
                <Link to="/login">
                  <div className="sideMenuAuthButton__contentWrapper">
                    <div className="sideMenuAuthButton__text">
                      Login / Signup
                    </div>
                  </div>
                </Link>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Navbar;
