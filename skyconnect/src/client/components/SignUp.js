import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";

function SignUp() {

    const [UserFirstName, setUserfirstname] = useState('');
    const [UserLastName, setUserlastname] = useState('');
    const [UserEmail, setUseremail] = useState('');
    const [UserPhoneNumber, setUserPhoneNumber] = useState('');
    const [UserName, setUsername] = useState('');
    const [UserPassword, setPassword] = useState('');
    const [RoleId, setRoleId ] = useState(1);

  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            UserFirstName,
            UserLastName,
            UserEmail,
            UserPhoneNumber,
            UserName,
            UserPassword,
            RoleId
        }
        console.log(userData);

        try {
            const response = await axios.post(`${url}/SignUp`,
                (userData))
                .then(function (res) {
                    console.log(res);
                    if (res.status == 200) {
                        alert(`Welcome ${UserFirstName}`);
                        //if () {
                        //    return <HomePage />
                        //}
                    }
                })
        } catch (error) {
            console.error('Sign-Up failed', error);
            alert(`Sign In Failed`);
        }
    }; 

    return (

        <>
        <Signup>

            <div className="container">
                    <div className="form-box">
                        <h1 id="title">Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <div className="input-field" id="nameField">
                                    <i className="fa-solid fa-user"></i>
                                    <input
                                        type="text"
                                        value={UserFirstName}
                                        placeholder="First Name"
                                        onChange={(e) => {setUserfirstname(e.target.value) } }   />
                                </div>
                                <div className="input-field" id="nameField">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text"
                                        value={UserLastName}
                                        placeholder="Last Name"
                                        onChange={(e) => { setUserlastname(e.target.value) }} />
                                </div>

                                <div className="input-field">
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="email"
                                        id="email"
                                        value={UserEmail}
                                        placeholder="Email"
                                        onChange={(e) => { setUseremail(e.target.value) }} />
                                </div>

                                <div className="input-field" id="phoneField">
                                    <i className="fa-solid fa-phone"></i>
                                    <input
                                        type="tel"
                                        value={UserPhoneNumber}
                                        placeholder="Phone"
                                        onChange={(e) => { setUserPhoneNumber(e.target.value) }} />
                                </div>

                                <div className="input-field" id="phoneField">
                                    <i className="fa-solid fa-phone"></i>
                                    <input
                                        type="text"
                                        value={UserName}
                                        placeholder="User Name"
                                        onChange={(e) => { setUsername(e.target.value) }} />
                                </div>

                                <div className="input-field">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password"
                                        value={UserPassword}
                                        placeholder="Password"
                                        id="password"
                                        onChange={(e) => { setPassword(e.target.value) }} />
                                    <button id="eyeIcon"><i className="fa-solid fa-eye-slash"></i></button>
                                </div>
                            </div>
                            <br /><br /><br /><br />
                            <div className="btn-field">
                                <button type="submit" id="signupBtn">Sign Up</button>
                            </div>

                        </form>
                    </div>
            </div>
               

            </Signup>
        </>

    );
}

export default SignUp;

const Signup = styled.div`
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
    background-position: center;
    background-size: cover;
    position: relative;
}

.form-box
{
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

