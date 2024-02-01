import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import '../App.css';
//import { sign } from "crypto";

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";


function SignIn() {
  
    const navigate = useNavigate();

    const [UserName, setUsername] = useState('');
    const [UserPassword, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [toSignUp, setToSignUp] = useState(false);
    
    //let signInLink = document.getElementsByName("signIn");

    if (toSignUp === true) {
        return <Navigate to="/SignUp" />;
    }

    const handleSignOut = async (e) => {
        e.preventDefault();
        setLoggedIn(false);
       
    }

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();    

        const userData = {
           UserName,
           UserPassword
        }

        try {
            const response = await axios.post(`${url}/SignIn`,
                (userData))
                .then(function (res) {
                    if (res.status == 200) {
                        setLoggedIn(true);  
                        if (res.data[0].RoleId == 2) {
                            navigate('/admin')
                        }
                    } 
                })
        } catch (error) {
            console.error('Sign-in failed', error);  
            alert("User Name or Password Incorrect");
        }
    }; 

    return (

    <>
        <Signin>


                <div className="container">
                    {loggedIn == false ? 

                        <div className="form-box">
                            <h1 id="title">Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">

                                    <div className="input-field">
                                        <i className="fa-solid fa-envelope"></i>
                                        <input htmlFor="username"
                                            type="text"
                                            id="username"
                                            value={UserName}
                                            placeholder="User Name"
                                            required={true}
                                            onChange={(e) => { setUsername(e.target.value) }} />
                                    </div>

                                    <div className="input-field">
                                        <i className="fa-solid fa-lock"></i>
                                        <input htmlFor="password"
                                            type="text"
                                            id="password"
                                            value={UserPassword}
                                            placeholder="Password"
                                            onChange={(e) => { setPassword(e.target.value) }} />
                                        <button id="eyeIcon"><i className="fa-solid fa-eye-slash"></i></button>
                                    </div>

                                    <br />
                                    <a href="" onClick={() => navigate('/ForgotPassword')}>Forgot Password</a>

                                    <br />
                                    <br />

                                    <a href="" onClick={() => setToSignUp(true)}>Sign Up</a>


                                </div>

                                <div className="btn-field">
                                    <button
                                        type="submit"
                                        id="signinBtn">Sign In</button>
                                </div>

                            </form>
                        </div>

                        :

                        <div className="form-box">
                            <h1 id="title">Sign Out</h1>

                            <br />
                            <label>{UserName}</label>
                            <br />
                            <br />
                            <form onSubmit={handleSignOut}>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="btn-field">
                                    <button
                                        type="submit"
                                        id="signinBtn">Sign Out</button>
                                </div>

                            </form>
                        </div>



                    }
                    </div>
    
            

        </Signin>
        </>
    );
}

export default SignIn;

const Signin = styled.div`
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
    height:100vh;
    background-image: linear-gradient(rgba(0,0,50,0), rgba(0,0,50,0.8));
    background-position: center;
    background-size: cover;
    position: relative;
}

.form-box
{
    height: 50%;
    width: 90%;
    max-width: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 
    background: rgba(250, 250, 252, 0.5);
    padding: 50px 60px 70px;
    text-align: center;
}

.form-box h1
{
    font-size: 30px;
    margin-bottom: 60px;
    color: #3c00a0;
    position: relative;
    margin-top: -30px;
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

.input-field
{
    background: #eaeaea;
    margin: 15px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    max-height: 65px;
    overflow: hidden;
}

.input-field button
{
    border: 0;
    margin-right: 10px;
}

input
{
    width: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 15px 20px;
}

.input-field i
{
    margin-left: 15px;
    color: #111;
}

.btn-field
{
    width: 100%;
    display: flex;
    justify-content: center;

}

.btn-field button
{
    flex-basis: 48%;
    background: #3c00a0;
    color: #fff;
    height: 40px;
    border-radius: 20px;
    border-color: #555;
    outline: 0;
    cursor: pointer;
    transition: background 1s;
    margin-top: -70px;
}

.input-group
{
    height: 280px;
}

.navbar
{
    height: 8%;
    display: flex;
    align-items: center;
}

.App-logo
{
    width: 50px;
    cursor: pointer;    
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
  
`;

