import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

const url = "https://skyconnect-2b47.onrender.com";

function App() {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        getUsers();        
    }, []);

    const getUsers = () => {
        axios.get(`${url}/allUsers`).then((getUsers) => {
            setUsers(getUsers.data);
            console.log(getUsers.data)
        }).catch((err) => {console.log(err) });
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SkyConnect
        </p>
        <p>
        .......  Coming Soon Today!!!!
        </p>
      </header>
    </div>
  );
}

export default App;
