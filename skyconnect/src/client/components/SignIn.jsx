import plane from '../LoginPagePlane.png';
import skyConnect from '../SkyConnect_logo_transparent.png';
import Header from './Header.jsx';
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";

function SignIn() {
    
    const [username, setUsername] = userState("");
    const [password, setPassword] = userState("");
    const [loggedIn, setLoggedIn] = useState(false);

    React.useEffect(() => {
        getUsers();
    }, []);

    function recordUsername(value) {
        setUsername(() => value);
    };

    function recordPassword(value) {
        setPassword(() => value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const userData = {
            UserName: username,
            UserPassword: password
        }
       
        axios.post(`${url}/login`, userData)
            .then(function (res) {
                setLoggedIn(true);
                console.log(userData);
            })
            .catch(function (err) {
                console.log(err);
            })

    }
 

    return (

    <>
        <Signin>

            <div style={{
                backgroundImage: `url(${plane})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }}>
            <div class="container">
                <div class="container">
                   <Header />
                    <div class="form-box">
                        <h1 id="title">Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <div class="input-group">

                                    <div class="input-field">
                                        <i class="fa-solid fa-envelope"></i>
                                            <input htmlFor="UserName" type="username" id="username" name="UserName" placeholder="User Name" required="true"  />
                                    </div>

                                    <div class="input-field">
                                        <i class="fa-solid fa-lock"></i>
                                            <input htmlFor="UserPassword" type="password" placeholder="Password" name="UserPassword" value={data.password} id="password" required="true"  />
                                        <button id="eyeIcon"><i class="fa-solid fa-eye-slash"></i></button>
                                    </div>

                                        <br /><a href="/ForgotPassword">Forgot Password</a><br />
                                    <br />
                                        <li><a href="/SignUp">Sign Up</a> </li>

                                </div>

                                <div class="btn-field">
                                    <button type="submit" id="signinBtn">Sign In</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >

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
    background-image: linear-gradient(rgba(0,0,50,0), rgba(0,0,50,0.8)), url(LoginPagePlane.webp);
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

