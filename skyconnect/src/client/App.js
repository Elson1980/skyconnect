import HomePage from './components/HomePage.js';
import SignIn from './components/SignIn.js';
import ForgotPassword from './components/ForgotPassword.jsx';
import MyFlights from './components/MyFlights.js';
import About from './components/About.jsx';
import SignUp from './components/SignUp.js';
import Header from './components/Header.jsx';
import AdminPage from './components/AdminPage.js';
import Cart from './components/Cart.js';
import PaymentSuccess from './components/PaymentSuccess.js';
import plane from './LoginPagePlane.png';
import { Route, Routes, Link } from "react-router-dom";

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
            <Route path="SignIn" element={<SignIn />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="myflights" element={<MyFlights />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        </Routes>           

        </div>
   </>
  );
}

export default App;