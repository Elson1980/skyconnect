import styled from "styled-components";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";


function About() {

   

    return (

    <>
        <AboutPage>
               
                <div class="row">
                    <div class="col">
                        <h1>About Us</h1>
                        <p>
                            SkyConnect is a reflection of our journey and dedication to transforming the way people search for and book flights. We started this project in 2024 with a team of 4, some of whom are experienced developers, while others are new to the programming world. We came together because we all agree that searching for airplane flights can be frustrating, and we want to make it easier for everyone to book flights and spend time with their families, especially during the holidays. This page is not just a formality; it's a way for us to share our vision, history, and the diverse expertise of our team. We want to build trust and credibility with our users by being transparent about who we are and what we aim to achieve. Our goal is to simplify the air travel process and make it more customer-centric.
                        </p>
                    </div>

                    <div class="col2">
                        <div class="form-box">
                            <h1 id="title">Meet the Team</h1>
                            <h2 id="body">Michelle Elson</h2>
                            <h2 id="body">Robert Feagley</h2>
                            <h2 id="body">Kevin Richardson</h2>
                            <h2 id="body">Jacob Casey</h2>

                        </div>
                    </div>
                </div>

        </AboutPage>
        </>
    );
}

export default About;

const AboutPage = styled.div`
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
    flex-basis: 50%;
}

.col h1 {
    margin-left: 30%;
    font-size: 50px;
}

.col p {
    
    font-size: 15px;
    letter-spacing: 1px ;
    word-spacing: 0px;
    
}

.col2
{
    flex-basis: 50%;
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
    position: absolute;
    top: 15%;
    left: 50%;
    background: rgba(250, 250, 252, 0.2);
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
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translatex(-50px);
}

.col2 h1
{
    font-size: 30px;
    margin-bottom: 60px;
    margin-top: -15px;
    color: #3c00a0;
    position: relative;
}

.col2 h2
{
    font-size: 20px;
    margin-top: 75px;
    color: #d1c1eb;
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
} box-sizing: border-box;
}
  
`;