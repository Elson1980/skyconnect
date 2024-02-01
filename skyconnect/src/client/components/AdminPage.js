import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import FlightManagementTab from './AdminFlightManagementTab.js';
import AgentManagementTab from './AdminAgentTab.jsx';


const AdminPage = () => {

    const [activeTab, setActiveTab] = useState("flightTab");

    const handleFlightTab = () => {
        setActiveTab("flightTab");
    };
    const handleAgentTab = () => {
        setActiveTab("agentTab");
    };

    return (
        <TabsStyle>
            <div className="Tabs">
                {/* Tab nav */}
                <ul className="nav">
                    <li className={activeTab === "flightTab" ? "active" : ""}
                    onClick={handleFlightTab}

                    >Flight Management</li>
                    <li className={activeTab === "agentTab" ? "active" : ""}
                        onClick={handleAgentTab}
                    >Agent Tracking</li>
                </ul>
                <div className="outlet">
                    {/* content will be shown here */}
                    {activeTab === "flightTab" ? <FlightManagementTab /> : <AgentManagementTab />}
                </div>
            </div>
        </TabsStyle>
    );

};
export default AdminPage;

const TabsStyle = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    *
{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.navbar
{
    height: 8%;
    display: flex;
    align-items: center;
}

.logo
{
    width: 50px;
    cursor: pointer;    
}

ul li
{
    list-style: none;
    display: inline-block;
    margin-left: 60px;
    color: white;
}

ul li a
{
    text-decoration: none;
    color: white;
    font-size: 13px;    
}

.row
{
    display: flex;
    height: 88%;
    align-items: center;
}

.col
{
    flex-basis: 50%;
}

.col2
{
    flex-basis: 50%;
}

h1
{
    color: white;
    font-size: 75px;
    padding-left: 50px !important;
}

p
{
    color: white;
    font-size: 11px;
    line-height: 15px;
    padding-left: 50px !important;
}

img {
    padding-left: 20px;
}

.form-box
{
    height: 75%;
    width: 45%;
    position: absolute;
    top: 15%;
    left: 50%;
    background: rgba(250, 250, 252, 0.2);
    padding: 50px 60px 70px;
    text-align: center;
}

.form-box h1::after
{
    content: '';
    width: 100px;
    height: 4px;
    border-radius: 3px;
    background: #3c00a0;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translatex(-50px);
}

.col2 h1
{
    font-size: 30px;
    margin-bottom: 60px;
    margin-top: -15px;
    color: #3c00a0;
    position: relative;
}

label 
{
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input, select 
{
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button 
{
    background-color: #3c00a0;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
}

button:hover
{
    background-color: grey;
}

form
{
    margin-top: -40px;    
}
  
`;