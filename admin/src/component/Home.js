import React, { useEffect } from 'react';
import SideBar from "./sidebar/SideBar";
import RightContent from "./rightcontent/RightContent";

export default function Home() {
    return (
        <>
            <div className="flexContent">
                <SideBar />
                <RightContent />
            </div>
        </>
    )
}
