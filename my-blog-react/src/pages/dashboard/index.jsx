import React, { useState } from "react";
import BlogCatalogue from "./BlogCatalogue";
import Header from "../../components/Header";
import AccountProfile from "./AccountProfile";

function index(){
    const [activeTab, setActiveTab] = useState('catalogue');

    return(
        <>
        <Header/>

        <div>
            <h3>My Dashboard</h3>
            <div className="tabs">
                <span className={"tab ${activeTab ==='catalogue' ? 'active-tab' : '' } "} onClick={() => setActiveTab('catalogue')} > My Posts(0) </span>
                
                <span className={"tab ${activeTab === 'profile' ? 'active-tab' : ''} "} onClick={() => setActiveTab('profile')} >My Profile</span>
            </div>

            {activeTab === "catalogue" ? (<BlogCatalogue/>) : (
                <AccountProfile/>
            )}

        </div>
        </>
    )
}
export default index 