import HomePage from './components/HomePage.jsx';
import SignIn from './components/SignIn.js';
import ForgotPassword from './components/ForgotPassword.jsx';
import MyFlights from './components/MyFlights.jsx';
import About from './components/About.jsx';
import SignUp from './components/SignUp.jsx';
import Header from './components/Header.jsx';
import plane from './LoginPagePlane.png';
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

function App() {


    return (
        <>     
            <div style={{
                backgroundImage: `url(${plane})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }}>
        <Header />


        <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="myflights" element={<MyFlights />} />
            </Routes>  
        </div>
   </>
  );
}

export default App;