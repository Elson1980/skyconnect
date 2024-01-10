import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import axios from "axios";
import './App.css';

const url = "https://skyconnect-2b47.onrender.com";

let headerElement = ['User Id', 'User Name']

function App() {

    const [users, setUsers] = React.useState([]);
    const [columns, setColumns] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


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
          <TableContainer>
          <Table>
          <TableHead>
              <TableRow>
                  {headerElement.map((header) => {
                      return (
                          <TableCell
                              key={header}                         
                          >
                              {header}
                          </TableCell>
                      )
                  })}
              </TableRow>
                  </TableHead>
                  <TableBody>
                      {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((column) => {

                          return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={column.UserId}>
                                  {/* {columns.map((column, key, value) => {  
                       
                      console.log(value)               
                    return (
                      <> */}
                                  <TableCell key={column.UserId}>
                                      {column.UserId}
                                  </TableCell>
                                  <TableCell key={column.UserName}>
                                      {column.UserName}
                                  </TableCell>
                              </TableRow>);
                      })}
                          </TableBody>
                          </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={columns.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
    </div>
  );
}

export default App;
