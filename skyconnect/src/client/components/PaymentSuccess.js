import skyConnect from '../SkyConnect_logo_transparent.png';
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";

function PaymentSuccess() {


    const navigate = useNavigate();


    return (

        <>
            <Success>


                <div className="col2">
                    <div className="form-box">
                        <h1 id="title">Congratulations!</h1>
                        <form>

                            <p className="S">Payment Successful</p>

                            <h2 className="RH"><a href="" onClick={() => navigate('/')}>Return Home</a> </h2>


                        </form>
                    </div>
                </div>
            </Success>
        </>
    );
};

export default PaymentSuccess;

const Success = styled.div`
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

.container
{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,50,0), rgba(0,0,50,0.8)), url(LoginPagePlane.webp);
    background-position: center;
    background-size: cover;
    padding-right: 5%;
    padding-left: 5%;
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
   

}

nav
{
    flex: 1;
    text-align: right;  
    margin-right: 30px;  
}

nav ul li
{
    list-style: none;
    display: inline-block;
    margin-left: 60px;    
}

nav ul li a
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

}

.col2
{
    display: flex;
    justify-content: center;

}

h1
{
    color: white;
    font-size: 100px;

}

p
{
    color: white;
    font-size: 11px;
    line-height: 15px;
}

.form-box
{
    height: 75%;
    width: 45%;
    position: center;
    top: 15%;
    left: 50%;
    background: rgba(250, 250, 252, 0.5);
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
    position: center;
    bottom: -12px;
    left: 50%;
    transform: translate(-50px);
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
    margin-top: 40px; 
    line-height: 200px;

}
.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #5349e2;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition-duration: 0.4s;
  }
.button:hover {
    background-color: #3a0637;
  }

.S {
    font-size: 50px;
    line-height: 100px;
    color: #3c00a0;
}
  
`;