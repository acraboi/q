import React, { useState } from 'react';
import "./App.css";

import LoginForm from "./component/login"; // login for admin
import AdminForm from "./component/admin"; // create account for admin
// import RegistrationForm from "./component/registration"; // create driver registration



function App() {
    const [currentForm, setcurrentForm] = useState ('login');

    const toggleForm = (formName) => {
      setcurrentForm(formName);
    }
  return (
    <div className = "App">

      {
          currentForm === "login" ? <LoginForm onformSwitch={toggleForm}/> : <AdminForm onformSwitch={toggleForm}/>
      }
    {/* <LoginForm/> 
    <AdminForm/>
    <RegistrationForm/> */}
    </div>
  

  )
}

export default App;
