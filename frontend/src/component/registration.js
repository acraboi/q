import React, { useState } from 'react';
import '../component/styles/login/login.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [plateNum, setPlateNumber] = useState('');
  const [vehicleColor, setVheicleColor] = useState('');
  const [address, setAddress] = useState('');
  const [contactNum, setContactNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [stickId, setStickId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3040/driver/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          firstName, lastName, middleName,
          plateNum, vehicleColor, address,
          contactNum, vehicleType, stickId
         }),
      });
      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }
      // Redirect to dashboard upon successful login
     
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
  

      <div className="registration-container">
      
      <form onSubmit={handleSubmit} className="registration-form">
      <h1> TravelWise</h1>
      <h5>Driver Registration</h5>
  
        <div class = "column">
          <div class = "level">
         
          <label><div className='text'>First Name</div></label>
              <input type="firstName"value={firstName}onChange={(e) => setFirstName(e.target.value)}required/>
      
        
          <label><div className='text'>Last Name</div></label>
            <input type="lastName"value={lastName}onChange={(e) => setLastName(e.target.value)}required/>
          

          <label><div className='text'>Middle Name</div></label>
            <input type="middleName"value={middleName}onChange={(e) => setMiddleName(e.target.value)}required/>
          

          <label><div className='text'>PlateNumber</div></label>
            <input type="plateNum"value={plateNum}onChange={(e) => setPlateNumber(e.target.value)}required/>
          

          <label><div className='text'>Vehicle Color</div></label>
            <input type="vehicleColor"value={vehicleColor}onChange={(e) =>setVheicleColor(e.target.value)}required/>
       </div>

       <div class = "level">

          <label><div className='text'>Address</div></label>
            <input type="address"value={address}onChange={(e) => setAddress(e.target.value)}required/>
          
          
          <label><div className='text'>Contact Number</div></label>
            <input type="contactNum"value={contactNum}onChange={(e) => setContactNumber(e.target.value)}required/>
          

          <label><div className='text'>Vehicle Type</div></label>
            <input type="vehicleType"value={vehicleType}onChange={(e) => setVehicleType(e.target.value)}required/>
          

          <label><div className='text'>Sticker ID Number</div></label>
            <input type="stickId"value={stickId}onChange={(e) => setStickId(e.target.value)}required/>
          
           <label><div class="text">Picture</div></label>
          
                    <input type="file" id= "myfile" name = "filename "/>
        </div>
        </div>    

      

     
      <button type="submit" className='button'>Register</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    </div>
  );
}

export default RegistrationForm;
