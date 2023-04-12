  import React, { useState } from 'react';
  import '../component/styles/login/login.css';

  


  function LoginForm(props) {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3040/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
          const { error } = await response.json();
          throw new Error(error);
        }
    
        const { token } = await response.json();
        localStorage.setItem('token', token);
        // Redirect to dashboard
        window.location.href = '/dashboard';

        // TODO: Handle successful login
      } catch (error) {
        throw error;
    }
    };

    return (
      <div className="login-container">
      
           <form onSubmit={handleSubmit} className="login-form">
           <h1> TravelWise</h1>
           <h5>Admin account</h5>
       
               <label><div className='text'>Email</div></label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required className = 'input'/>
               

               <label><div className='text'>Password</div></label>
          <input type="password" value={password}onChange={(e) => setPassword(e.target.value)} required className = 'input'/>
        

             <button type="submit" className='button'>Login</button>
             <button className= "link-btn" onClick={() => props.onformSwitch('admin')}>Don't have an Account? Register here.</button>

    
            </form>
      </div>
  
  
     
    );
  }

  export default LoginForm;
