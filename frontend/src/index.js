import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './component/registration';
import AdminForm from './component/admin';
import SideBar from './component/Sidebar';
import LoginForm from './component/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = "/" element={<App />}/>
        <Route path = "/dashboard" element= {<SideBar/>}/>
        <Route path = "/employee" element={<RegistrationForm />}/>
        <Route path = "/admin" element={<AdminForm />}/>
        <Route path = "/admin/login" element={<LoginForm />}/>
      </Routes>
    </Router>    
    

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
