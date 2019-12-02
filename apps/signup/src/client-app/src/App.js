import React, { useState } from 'react';
import './App.css';

function App() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ tAndCs, setTAndCs ] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onInputChange = (action) => (e) => {
    const { value, type, checked } = e.target;
    const valToUpdate = type === 'checkbox' ? checked : value;
    action(valToUpdate);
  }

  const canContinue = () => 
    (name && name.length) 
    && (email && email.length) 
    && (password && password.length) 
    && tAndCs;

  return (
    <div className="signup-form-app">
      <h2>Create Account</h2>
      <div className="signup-form-container">
        <form onSubmit={(e) => onSubmit(e)}>

          <div className="form-row">
            <label>Name</label>
            <input 
              type="text"
              value={name}
              onChange={onInputChange(setName)}
              placeholder="e.g. John Smith" 
            />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={onInputChange(setEmail)}
              placeholder="e.g. info@deliverme.com"
            />
          </div>

          <div className="form-row">
            <label>Create password</label>
            <input
              type="password"
              value={password}
              onChange={onInputChange(setPassword)}
            />
          </div>

          <div className="form-row checkbox">
            <label>
              <input type="checkbox" value={tAndCs} onChange={onInputChange(setTAndCs)} />
              I accept the Terms and Conditions.  We also promise the GDPR.
            </label>
          </div>

          <div className="signup-form-container__actions">
            <button type="submit" disabled={!canContinue()}>
              Next
            </button>
          </div>

          <div className="other-info">
            Looking to sign up as a business owner?  Sign up here!
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
