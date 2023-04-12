import React, { useState } from 'react';
// import "./styles/admin/registration_form.css"

import '../component/styles/login/login.css';

function AdminForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3040/admin/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
         email, password
         }),
      });
      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }
      // Redirect to dashboard upon successful login
     
    } catch (error) {
        throw error;
    }
  };

  return (
    <div className='admin-container'>
      
      
      <form onSubmit={handleSubmit} className="Admin-form">
      <h1>TravelWise</h1>
      <h5>Register Admin</h5>
          
               <label><div className='text'>Email</div></label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required className = 'input'/>
               

               <label><div className='text'>Password</div></label>
                  <input type="password" value={password}onChange={(e) => setPassword(e.target.value)} required className = 'input'/>
               

                <button type="submit" className='button'>Register</button>
                <button className= "link-btn" onClick={() => props.onformSwitch('login')}>Already have an Account? Login here.</button>
     </form>
    
    </div>
  );
}

export default AdminForm;
 