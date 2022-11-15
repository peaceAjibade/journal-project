import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App} from './App';
import { Login } from './Login'
import { Register } from './Register'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);



