import skyConnect from '../SkyConnect_logo_transparent.png';
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";

function Cart() {

    
    const navigate = useNavigate();
    

    return (

        <>
            <CartPage>


                <div className="container">

                    

                    <div className="col2">
                        <div className="htmlForm-box">
                            <h1 id="title">Enter your payment details</h1>
                            <form>

                                <label htmlFor="from">Name</label>
                                <input type="text" id="from" name="from" placeholder="Name on card" required/>

                                    <label htmlFor="to">Card number</label>
                                    <input type="text" id="to" name="to" placeholder="####-####-####"/>

                                        <label htmlFor="depart">Expiration Date</label>
                                        <input type="date" id="depart" name="depart"/>

                                            <label htmlFor="return">Security code</label>
                                            <input type="text" id="return" name="return" placeholder="###"/>

                                                <label htmlFor="className">Card type</label>
                                                <select id="className" name="className">
                                                    <option value="card">Choose card</option>
                                                    <option value="economy">Visa</option>
                                                    <option value="business">Mastercard</option>
                                                    <option value="first">Discover</option>
                                                    <option value="card">Other</option>
                                                </select>

                                                <a href="" onClick={() => navigate('/paymentSuccess')} className="button">Pay</a>


                                            </form>
                                        </div>
                                    </div>


                          </div>
            </CartPage>
        </>
    );
};

export default Cart;

const CartPage = styled.div`
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
    background-image: linear-gradient(rgba(0,0,50,0), rgba(0,0,50,0.8));
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
    margin-top: -40px;    
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
  
`;