import HomePage from './components/HomePage.jsx';
import SignIn from './components/SignIn.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import MyFlights from './components/MyFlights.jsx';
import About from './components/About.jsx';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function App() {


    return (
        <>         
       
        <Router>               
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="myflights" element={<MyFlights />} />
            </Routes>           
        </Router>      
   </>
  );
}

export default App;
