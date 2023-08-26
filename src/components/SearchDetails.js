import React, { useState, useEffect } from 'react'
import '../css/SearchDetails.css';
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import { useParams, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchDetails() {
    const { localityURI } = useParams();

    const [trendingProjects1, setTrendingProjects1] = useState([]);

    const fetchData1 = () => {
        return fetch("http://82.180.136.42/api/projects/fetchDetailsBySearchLocality")
            .then((response) => response.json())
            .then((data) => setTrendingProjects1(data));
    }
    useEffect(() => {
        fetchData1();
    },[]);

    
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
        const response = await fetch("http://82.180.136.42/api/visit/siteVisit", {
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
    
    const [checkbox, setCheckbox] = useState(false);
    const handleInput = ()  => {
        if (checkbox === false) {
            setCheckbox(true);
        }else {
            setCheckbox(false);
        }
    }
    
    const [dropdown1, setDropdown1] = useState(false);
    const showDropdown = () => {
        if (dropdown1 === false) {
            setDropdown1(true);
        }else {
            setDropdown1(false);
        }
    }
    
    const [dropdown2, setDropdown2] = useState(false);
    const showDropdown2 = () => {
        if (dropdown2 === false) {
            setDropdown2(true);
            setShow(true);
        }else {
            setDropdown2(false);
            setShow(false);
        }
    }
    
    const [dropdown3, setDropdown3] = useState(false);
    const showDropdown3 = () => {
        if (dropdown3 === false) {
            setDropdown3(true);
        }else {
            setDropdown3(false);
        }
    }
    
    const [dropdown4, setDropdown4] = useState(false);
    const showDropdown4 = () => {
        if (dropdown4 === false) {
            setDropdown4(true);
        }else {
            setDropdown4(false);
        }
    }

    const [checkbox1, setCheckbox1] = useState(false);
    const check1 = () => {
        if (checkbox1 === false) {
            setCheckbox1(true);
        }else {
            setCheckbox1(false);
        }
    }
    const [checkbox2, setCheckbox2] = useState(false);
    const check2 = () => {
        if (checkbox2 === false) {
            setCheckbox2(true);
        }else {
            setCheckbox2(false);
        }
    }
    const [checkbox3, setCheckbox3] = useState(false);
    const check3 = () => {
        if (checkbox3 === false) {
            setCheckbox3(true);
        }else {
            setCheckbox3(false);
        }
    }
    const [checkbox4, setCheckbox4] = useState(false);
    const check4 = () => {
        if (checkbox4 === false) {
            setCheckbox4(true);
        }else {
            setCheckbox4(false);
        }
    }
    const [checkbox5, setCheckbox5] = useState(false);
    const check5 = () => {
        if (checkbox5 === false) {
            setCheckbox5(true);
        }else {
            setCheckbox5(false);
        }
    }

    const [yearCheckbox1, setYearCheckbox1] = useState(false);
    const year1 = () => {
        if (yearCheckbox1 === false) {
            setYearCheckbox1(true);
            setYearCheckbox2(false);
            setYearCheckbox3(false);
            setYearCheckbox4(false);
        }else {
            setYearCheckbox1(false);
            window.location.reload();
        }
    }
    const [yearCheckbox2, setYearCheckbox2] = useState(false);
    const year2 = () => {
        if (yearCheckbox2 === false) {
            setYearCheckbox1(false);
            setYearCheckbox2(true);
            setYearCheckbox3(false);
            setYearCheckbox4(false);
        }else {
            setYearCheckbox2(false);
            window.location.reload();
        }
    }
    const [yearCheckbox3, setYearCheckbox3] = useState(false);
    const year3 = () => {
        if (yearCheckbox3 === false) {
            setYearCheckbox1(false);
            setYearCheckbox2(false);
            setYearCheckbox3(true);
            setYearCheckbox4(false);
        }else {
            setYearCheckbox3(false);
            window.location.reload();
        }
    }
    const [yearCheckbox4, setYearCheckbox4] = useState(false);
    const year4 = () => {
        if (yearCheckbox4 === false) {
            setYearCheckbox1(false);
            setYearCheckbox2(false);
            setYearCheckbox3(false);
            setYearCheckbox4(true);
        }else {
            setYearCheckbox4(false);
            window.location.reload();
        }
    }
    // const currentYear = new Date().getFullYear();
    const [yearValue, setYearValue] = useState('0');
    const handleChangeYear = (e) => {
        const checkedYear = e.target.checked;
        if (checkedYear === true) {
            const valueYear = e.target.value;
            console.log(valueYear);
            if (yearCheckbox1 === true) {
                setYearValue(valueYear);
            }
            if (yearCheckbox2 === true) {
                setYearValue(valueYear);
            }
            if (yearCheckbox3 === true) {
                setYearValue(valueYear);
            }
            if (yearCheckbox4 === true) {
                setYearValue(valueYear);
            }
            setDropdown3(false);
        } else {
            const valueYear = 0;
            console.log(valueYear);
            window.location.reload();
        }
    }

    const [cityCheckbox1, setCityCheckbox1] = useState(false);
    const city = () => {
        if (cityCheckbox1 === false) {
            setCityCheckbox1(true);
        }else {
            setCityCheckbox1(false);
        }
    }
    const handleChangeCity = (e) => {
        const checkedCity = e.target.checked;
        if (checkedCity === true) {
            const valueCity = e.target.value;
            console.log(valueCity);
            setDropdown3(false);
        } else {
            const valueCity = 0;
            console.log(valueCity);
        }
    }

    const [bhk0, setBhk0] = useState('0');
    const [bhk1, setBhk1] = useState('0');
    const [bhk2, setBhk2] = useState('0');
    const [bhk3, setBhk3] = useState('0');
    const [bhk4, setBhk4] = useState('0');
    const handleChange1 = (e) => {
        const checked = e.target.checked;
        if (checked === true) {
            const value = e.target.value;
            setBhk0(value);
            console.log(value);
            setDropdown3(false);
            setDropdown1(false);
        } else {
            const value1 = 0;
            console.log(value1);
            setBhk0(value1);
            window.location.reload();
        }
    }
    const handleChange2 = (e) => {
        const checked = e.target.checked;
        if (checked === true) {
            const value = e.target.value;
            setBhk1(value);
            console.log(value);
            setDropdown3(false);
            setDropdown1(false);
        } else {
            const value1 = 0;
            console.log(value1);
            setBhk1(value1);
        }
    }
    const handleChange3 = (e) => {
        const checked = e.target.checked;
        if (checked === true) {
            const value = e.target.value;
            setBhk2(value);
            console.log(value);
            setDropdown3(false);
            setDropdown1(false);
        } else {
            const value1 = 0;
            console.log(value1);
            setBhk2(value1);
        }
    }
    const handleChange4 = (e) => {
        const checked = e.target.checked;
        if (checked === true) {
            const value = e.target.value;
            setBhk3(value);
            console.log(value);
            setDropdown3(false);
            setDropdown1(false);
        } else {
            const value1 = 0;
            console.log(value1);
            setBhk3(value1);
        }
    }
    const handleChange5 = (e) => {
        const checked = e.target.checked;
        if (checked === true) {
            const value = e.target.value;
            setBhk4(value);
            console.log(value);
            setDropdown3(false);
            setDropdown1(false);
        } else {
            const value1 = 0;
            console.log(value1);
            setBhk4(value1);
        }
    }

    const [showMax, setShowMax] = useState(false);
    const [show, setShow] = useState(true);
    const [budget1, setBudget1] = useState('0');
    const [budget2, setBudget2] = useState('0');
    
    const handleInput1 = (e) => {
        const checked1 = e.target.checked;
        if (checked1 === true) {
            const value1 = e.target.value;
            console.log(value1);
            setShowMax(true);
            setBudget1(value1);
        } else {
            const valuebud = 0;
            console.log(valuebud);
        }
    }
    const handleInput2 = (e) => {
        const checked2 = e.target.checked;
        console.log(checked2);
        if (checked2 === true) {
            const value2 = e.target.value;
            console.log(value2);
            setShowMax(false);
            setBudget2(value2);
        } else {
            const valuebud = 0;
            console.log(valuebud);
        }
    }
    const handleClickIn = () => {
        setShow(false);
        setDropdown2(false);
        setShowMax(false);
    }

    return (
        <>
                <div style={{ backgroundColor: '#f4f4f4', }} >
                    <Toaster style={{ zIndex: '100000', }} />
                    <Navbar2/>

                    <section className="tfp-topProjectDetail2">
                        <div className="contaier tfp-topProjectDetail-contaier">
                            
                            <div className="filter-main">
                                <div>
                                    { budget2 === '0' && bhk0 === '0' && bhk1 === '0' && bhk2 === '0' && bhk3 === '0' &&  bhk4 === '0' && bhk0 === '0' &&  yearValue === '0' ? (
                                        <div className="reset grey">
                                            <div className="img grey">
                                                <img src="/reload.png" alt="" style={{ width: '1rem', }} />
                                            </div>
                                            <div className="name grey">
                                                <div>reset</div>
                                            </div>
                                        </div>
                                    ):(
                                        <div className="reset" onClick={() => window.location.href=`${localityURI}`}>
                                            <div className="img">
                                                <img src="/reload.png" alt="" style={{ width: '1rem', }} />
                                            </div>
                                            <div className="name">
                                                <div>reset</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="filter" style={{ display: 'flex', }}>
                                    <div>
                                        <div className="filter-bedroom" onClick={showDropdown}>
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/bed.png" alt="" style={{ width: '1.5rem', }} />
                                                </div>
                                                <div className="text">
                                                    {bhk0 === '0' && bhk1 === '0' && bhk2 === '0' && bhk3 === '0' && bhk4 === '0' ? (
                                                        <div>Bedroom</div>
                                                    ) : (
                                                        <div>{bhk0 === '1' ? `${bhk0},` : '' }{bhk1 === '2' ? `${bhk1},` : '' }{bhk2 === '3' ? `${bhk2},` : '' }{bhk3 === '4' ? `${bhk3},` : '' }{bhk4 === '5' ? `${bhk4},` : '' } BHK</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path style={{ fill: '#d8232a' }} d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-dropdown1" style={{ display: dropdown1 ? "block" : "none" }} >
                                            <ul>
                                                <li>
                                                    <div className="checkbox-div" onClick={check1}>
                                                        <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="1" id="check1" required onChange={handleChange1} />
                                                        <svg
                                                            className={checkbox1 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="check1">1 BHK</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={check2}>
                                                        <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="2" id="check2" required onChange={handleChange2} />
                                                        <svg
                                                            className={checkbox2 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="check2">2 BHK</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={check3}>
                                                        <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX"  value="3" id="check3" required onChange={handleChange3} />
                                                        <svg
                                                            className={checkbox3 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="check3">3 BHK</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={check4}>
                                                        <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX"  value="4" id="check4" required onChange={handleChange4} />
                                                        <svg
                                                            className={checkbox4 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="check4">4 BHK</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={check5}>
                                                        <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="5" id="check5" required onChange={handleChange5} />
                                                        <svg
                                                            className={checkbox5 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="check5">5+ BHK</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="filter-bedroom" onClick={showDropdown2}>
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/budget.png" alt="" style={{ width: '1.5rem', }} />
                                                </div>
                                                <div className="text">
                                                    {budget2 === '0' ? (
                                                        <div>Budget</div>
                                                    ) : (
                                                        <div>
                                                            {budget1 === '₹ 0 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 5 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 10 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 20 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 30 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 40 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 50 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 60 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 70 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 80 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 90 L' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 1 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 1.5 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 2 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 2.5 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 3 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 4 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 5 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 6 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 8 Cr' ? `${budget1.slice(2,10)} - ` : '' }
                                                            {budget1 === '₹ 10 Cr' ? `${budget1.slice(2,10)} - ` : '' }

                                                            {budget2 === '₹ 0 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 5 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 10 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 20 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 30 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 40 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 50 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 60 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 70 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 80 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 90 L' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 1 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 1.5 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 2 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 2.5 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 3 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 4 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 5 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 6 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 8 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                            {budget2 === '₹ 10 Cr' ? `${budget2.slice(2,10)}` : '' }
                                                        </div>
                                                    )}
                                                    {/* {budget1}
                                                    {budget2} */}
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path style={{ fill: '#d8232a' }} d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div style={{ display: show ? "block" : "none" }}>
                                            <div className="filter-dropdown1" id="filterID" style={{ display: dropdown2 ? "block" : "none" }} >
                                                <div className="price">
                                                    <div className="min">
                                                        <div style={{ display: showMax ? 'none' : 'block' }}>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget1" value="₹ 0 L" onChange={handleInput1}  />
                                                                <label htmlFor="budget1" className="pri">₹ 0 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget2" value="₹ 5 L" onChange={handleInput1} />
                                                                <label htmlFor="budget2" className="pri">₹ 5 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget3" value="₹ 10 L" onChange={handleInput1} />
                                                                <label htmlFor="budget3" className="pri">₹ 10 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget4" value="₹ 20 L" onChange={handleInput1} />
                                                                <label htmlFor="budget4" className="pri">₹ 20 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget5" value="₹ 30 L" onChange={handleInput1} />
                                                                <label htmlFor="budget5" className="pri">₹ 30 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget6" value="₹ 40 L" onChange={handleInput1} />
                                                                <label htmlFor="budget6" className="pri">₹ 40 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget7" value="₹ 50 L" onChange={handleInput1} />
                                                                <label htmlFor="budget7" className="pri">₹ 50 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget8" value="₹ 60 L" onChange={handleInput1} />
                                                                <label htmlFor="budget8" className="pri">₹ 60 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget9" value="₹ 70 L" onChange={handleInput1} />
                                                                <label htmlFor="budget9" className="pri">₹ 70 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget10" value="₹ 80 L" onChange={handleInput1} />
                                                                <label htmlFor="budget10" className="pri">₹ 80 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget11" value="₹ 90 L" onChange={handleInput1} />
                                                                <label htmlFor="budget11" className="pri">₹ 90 L</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget12" value="₹ 1 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget12" className="pri">₹ 1 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget13" value="₹ 1.5 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget13" className="pri">₹ 1.5 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget14" value="₹ 2 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget14" className="pri">₹ 2 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget15" value="₹ 2.5 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget15" className="pri">₹ 2.5 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget16" value="₹ 3 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget16" className="pri">₹ 3 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget17" value="₹ 4 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget17" className="pri">₹ 4 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget18" value="₹ 5 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget18" className="pri">₹ 5 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget19" value="₹ 6 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget19" className="pri">₹ 6 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget20" value="₹ 8 Cr" onChange={handleInput1} />
                                                                <label htmlFor="₹budget20" className="pri">₹ 8 Cr</label>
                                                            </div>
                                                            <div>
                                                                <input type="checkbox" name="" id="budget21" value="₹ 10 Cr" onChange={handleInput1} />
                                                                <label htmlFor="budget21" className="pri">₹ 10 Cr</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="max" style={{ marginLeft: showMax ? '7rem' : '0rem', }}>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 5 L" value="₹ 5 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 5 L" className="pri">₹ 5 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 10 L" value="₹ 10 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 10 L" className="pri">₹ 10 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 20 L" value="₹ 20 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 20 L" className="pri">₹ 20 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 30 L" value="₹ 30 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 30 L" className="pri">₹ 30 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 40 L" value="₹ 40 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 40 L" className="pri">₹ 40 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 50 L" value="₹ 50 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 50 L" className="pri">₹ 50 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 60 L" value="₹ 60 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 60 L" className="pri">₹ 60 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 70 L" value="₹ 70 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 70 L" className="pri">₹ 70 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 80 L" value="₹ 80 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 80 L" className="pri">₹ 80 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 90 L" value="₹ 90 L" onChange={handleInput2} />
                                                            <label htmlFor="₹ 90 L" className="pri">₹ 90 L</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 1 Cr" value="₹ 1 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 1 Cr" className="pri">₹ 1 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 1.5 Cr" value="₹ 1.5 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 1.5 Cr" className="pri">₹ 1.5 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 2 Cr" value="₹ 2 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 2 Cr" className="pri">₹ 2 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 2.5 Cr" value="₹ 2.5 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 2.5 Cr" className="pri">₹ 2.5 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 3 Cr" value="₹ 3 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 3 Cr" className="pri">₹ 3 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 4 Cr" value="₹ 4 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 4 Cr" className="pri">₹ 4 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 5 Cr" value="₹ 5 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 5 Cr" className="pri">₹ 5 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 6 Cr" value="₹ 6 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 6 Cr" className="pri">₹ 6 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 8 Cr" value="₹ 8 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 8 Cr" className="pri">₹ 8 Cr</label>
                                                        </div>
                                                        <div onClick={handleClickIn}>
                                                            <input type="checkbox" name="" id="₹ 10 Cr" value="₹ 10 Cr" onChange={handleInput2} />
                                                            <label htmlFor="₹ 10 Cr" className="pri">₹ 10 Cr</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="filter-bedroom" onClick={showDropdown3}>
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/possession.png" alt="" style={{ width: '1.5rem', }} />
                                                </div>
                                                <div className="text">
                                                    {yearValue === '0' ? (
                                                        <div>Possession Within</div>
                                                    ) : (
                                                        <div>{yearValue === '2023' ? 'Within 1 yrs' : ''}{yearValue === '2025' ? 'Within 2 yrs' : ''}{yearValue === '2026' ? 'Within 3 yrs' : ''}{yearValue === '2027' ? 'Within 4+ yrs' : ''}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path style={{ fill: '#d8232a' }} d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-dropdown3" style={{ display: dropdown3 ? "block" : "none" }} >
                                            <ul>
                                                <li>
                                                    <div className="checkbox-div" onClick={year1}>
                                                        <input type="radio" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="2023" id="year1" required onChange={handleChangeYear} onClick={year1} />
                                                        <svg
                                                            className={yearCheckbox1 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                            onClick={year1}
                                                        >
                                                            <path onClick={year1} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="year1">Within 1 yrs</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={year2}>
                                                        <input type="radio" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="2025" id="year2" required onChange={handleChangeYear} onClick={year2} />
                                                        <svg
                                                            className={yearCheckbox2 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                            onClick={year2}
                                                        >
                                                            <path onClick={year2} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="year2">Within 2 yrs</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={year3}>
                                                        <input type="radio" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="2026" id="year3" required onChange={handleChangeYear} onClick={year3} />
                                                        <svg
                                                            className={yearCheckbox3 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                            onClick={year3}
                                                        >
                                                            <path onClick={year3} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="year3">Within 3 yrs</label>
                                                </li>
                                                <li>
                                                    <div className="checkbox-div" onClick={year4}>
                                                        <input type="radio" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="2027" id="year4" required onChange={handleChangeYear} onClick={year4} />
                                                        <svg
                                                            className={yearCheckbox4 === true ? "filter-checkboxed" : "filter-checkbox"}
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                            onClick={year4}
                                                        >
                                                            <path onClick={year4} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="year4">Within 4+ yrs</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="filter-bedroom" onClick={showDropdown4}>
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/city.png" alt="" style={{ width: '1.5rem', }} />
                                                </div>
                                                <div className="text">
                                                    <div>City</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path style={{ fill: '#d8232a' }} d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-dropdown4" style={{ display: dropdown4 ? "block" : "none" }} >
                                            <ul>
                                                <li>
                                                    <div className="checkbox-div" onClick={city}>
                                                        <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="Pune" id="city" required onChange={handleChangeCity} onClick={city} selected />
                                                        <svg
                                                            className="filter-checkboxed"
                                                            id="newCheckbox"
                                                            viewBox="0 0 24 24"
                                                            onClick={city}
                                                        >
                                                            <path onClick={city} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="city">Pune</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row tfp-topProjectDetail-row">
                                <div className="tfp-m1z8tl">
                                    <div className="tfp-search_detailsFlex" style={{ marginTop: '20px', }}>{}
                                        {trendingProjects1.map((userObj1, index) => {
                                            if (userObj1.locality === localityURI) {
                                                if (budget1.slice(2,10) > userObj1.startPrice || budget2.slice(2,10) < userObj1.EndPrice || budget2.slice(2,10) === userObj1.EndPrice || budget2 === '0') {
                                                    if (bhk0 === '0' || bhk0 === userObj1.BHk.slice(0,1) || bhk1 === userObj1.BHk.slice(2,3) || bhk2 === userObj1.BHk.slice(4,5) || bhk3 === userObj1.BHk.slice(6,7) || bhk4 === userObj1.BHk.slice(8,9)) {
                                                        if (userObj1.possessionDate.slice(0,4) < yearValue || userObj1.possessionDate.slice(0,4) === yearValue || yearValue === '0') {
                                                            return (
                                                                <>
                                                                    <div className="tfp-1o20zr1">
                                                                        <div className="tfp-rgnl8b">
                                                                            <img src={userObj1.headImg} className="img tfp-gzbbet" />
                                                                            <div className="tfp-t7ue7i">
                                                                                {/* <div>{userObj1.possessionDate}</div> */}
                                                                                <div className="tfp-xwpybk">₹ {userObj1.startPrice} - {userObj1.EndPrice}</div>
                                                                                <div className="tfp-1dltny1">{userObj1.ProjectName}</div>
                                                                                <div className="tfp-1erostd">By {userObj1.builderName}</div>
                                                                                <div data-q="prop-title" className="tfp-n829ht">{userObj1.locality}, {userObj1.city}</div>
                                                                                <div data-q="prop-title" className="tfp-n829ht" style={{ fontWeight: '500', fontSize: '12px', color: '#595959', marginBottom: '6px', }}>Rera ID:- {userObj1.reraID}</div>
                                                                                <div className="tfp-1dbpedm">
                                                                                    <div className="tfp-k008qs">
                                                                                        <div className="tfp-1p4rkkz">
                                                                                            <span className="tfp-68mf3y">Configurations</span>
                                                                                            <span className="tfp-hvec1">{userObj1.BHk} BHK Apartments</span>
                                                                                        </div>
                                                                                        <div className="tfp-1p4rkkz">
                                                                                            <span className="tfp-68mf3y">Avg. Price</span>
                                                                                            <span className="tfp-hvec1">₹ {userObj1.startPrice}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="tfp-search_detailsBtn">
                                                                                        <button className="tfp-aiwj6j1">Contact <i className="fa-solid fa-phone"></i></button>
                                                                                        <Link to={`/projects/view-details/${userObj1._id}/${userObj1.builderID}`}>
                                                                                            <button className="tfp-aiwj6j2">View Details <i className="fa-solid fa-arrow-right"></i></button>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* {currentYear+2} */}
                                                                </>
                                                            );
                                                        } else {
                                                            return (
                                                                <>
                                                                    <h1>Not Found</h1>
                                                                </>
                                                            )
                                                        }
                                                    } else {
                                                        return (
                                                            <>
                                                                <h1>Not Foundasd</h1>
                                                            </>
                                                        )                                                            
                                                    }
                                                } else {
                                                    return (
                                                        <>
                                                            <div className="error">
                                                                <div className="errorLogo">
                                                                    <img src="/oops.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className="errorHText">
                                                                        <div>Oops!</div>
                                                                    </div>
                                                                    <div className="errorText">
                                                                        <div>We didn’t find anything that matches your requirement Try reducing the filters or modifying your search</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )                                                            
                                                }
                                            }
                                        })}
                                    </div>

                                    <div className="tfp-1q2qa0g">
                                        <section style={{ padding: '6px', backgroundColor: 'white', }}>
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
                </div>
        </>
    )
}

// #d8232a
// #E54848