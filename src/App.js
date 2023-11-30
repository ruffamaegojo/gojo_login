import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    width: '400px',
    height: '80vh',
    border: '1px solid #000', 
    borderRadius: '15px',
    backgroundColor: 'white', };

  const inputStyle = { marginBottom: '10px',padding: '8px', width: '80%', borderRadius: '8px',};
  const buttonStyle = {
    padding: '10px', 
    width: '80%', 
    color: '#fff', 
    backgroundColor: '#008CBA', 
    fontFamily: 'Arial, sans-serif', 
    borderRadius: '8px',};
  const facebookButtonStyle = {padding: '10px', width: '80%', color: '#fff', backgroundColor: '#3b5998', fontFamily: 'Verdana, sans-serif', borderRadius: '8px',  backgroundImage: 'url(1.jpg)', backgroundSize: '40px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center'};
  const googleButtonStyle = {padding: '10px', width: '80%', color: '#000', backgroundColor:  '#ffffff', fontFamily: 'Verdana, sans-serif',  borderRadius: '8px', backgroundImage: 'url(2.jpg)', backgroundSize: '40px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center'};

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        style={inputStyle}
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        value={password}
        onChange={handlePasswordChange}
      />
      <p> 
      <a href="/forgot-password">Forgot Password?</a>
      </p>
      <button  type="submit" style={buttonStyle}>
        Login
      </button>
      <p>Don't have an account?  <a href="/signup">Sign Up</a></p>
      <p>Or</p>
      <button style={ facebookButtonStyle}>Login with Facebook</button>
      <button style={googleButtonStyle}>Login with Google</button>
    </form>
  );
};

export default LoginForm;

