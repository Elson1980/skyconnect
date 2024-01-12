import HomePage from './components/HomePage.jsx';
import SignIn from './components/SignIn.jsx';
import ForgotPassword from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
//import plane from './LoginPagePlane.png';
//import skyConnect from './SkyConnect_logo_transparent.png';
//import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import TablePagination from '@mui/material/TablePagination';
//import Paper from '@mui/material/Paper';
//import axios from "axios";
//import './App.css';


function App() {

   // const homePage = createBrowserRouter([
   //     {
   //         path: "/",
   //         element: <HomePage />,
   //     },
   // ]);

    return (

        <div>
            <Router>
               
                <Routes>
                    <Route path="" exact element={<HomePage />}></Route>
                    <Route path="signin" element={<SignIn />}></Route>
                    <Route path="signin/signup" element={<SignUp />}></Route>
                    <Route path="signin/forgotpassword" element={<ForgotPassword />}></Route>
                </Routes>
           
            </Router>
        </div>

  );
}

export default App;
