import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SmsIcon from '@mui/icons-material/Sms';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
//THIS DOESN'T RENDER SOMETHING
//OBJECT ONLY
 const SideBar = () =>{
    return(
        <div className = "SideBar">
            <nav className = 'item'>
                <ul className= 'eachItem'>
                   
                    <Link to = '/'  className="link-with-icon"><HomeIcon className="icon"/>  <span className="text">Home</span> </Link>
                    <Link to = '/admin/login' className="link-with-icon"> <AccountBoxIcon className="icon"/> <span className="text">Employee</span> </Link>
                    <Link to = '/employee'    className="link-with-icon"> <DirectionsCarIcon className="icon"/> <span className="text">Driver</span> </Link>
                    <Link to = '/'            className="link-with-icon"> <SupervisorAccountIcon className="icon"/> <span className="text">Commuter</span> </Link>
                    <Link to = '/ '           className="link-with-icon"> <SmsIcon className="icon"/> <span className="text">Generated SMS</span> </Link>
                    <Link to = '/admin'       className="link-with-icon"> <RequestPageIcon className="icon"/> <span className="text">Student Request</span> </Link>
                    <Link to = '/admin/login' className="link-with-icon"> <AdminPanelSettingsIcon className="icon"/> <span className="text">Admin</span> </Link>
                    <Link to = '/'            className="link-with-icon"> <LogoutIcon className="icon"/> <span className="text">Logout</span> </Link>
                </ul>
            </nav>
        </div>
    )
 }

export default SideBar;