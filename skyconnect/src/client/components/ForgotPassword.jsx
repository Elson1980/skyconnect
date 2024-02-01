import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";

function ForgotPassword() {
           
    return (

    <>
        <Forgotpassword>

              
            <div className="container">
                    <div className="container">

                        <p>This page will be a forgot password form</p>
                    </div>
            </div>
              

        </Forgotpassword>
        </>
    );
}

export default ForgotPassword;

const Forgotpassword = styled.div`
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
  
`;