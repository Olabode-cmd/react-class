import Logo from '../assets/logo.svg'
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const apiUrl='dummy.api.url/'
    const formData = {
      email: email,
      password: password
    };

    try {
      const response = fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });


      // ONLY FOR TEST
      const testData = JSON.stringify(formData)
      console.log(testData)
      // ONLY FOR TEST

      const result = await response.json();
      console.log('Response from Server:' + result);
      alert('Login successful')
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed')
    }
  }
  
    return (
      <>
        <div className="container">
        <div>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="login-box">
            <h1 className="title">log in to your account</h1>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <input 
                  type="password" 
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type='submit'>Log in</button>

              <p className='passkey'>Log in with passkey</p>
            </form>
          </div>
        </div>
      </div>
      </>
    );
}

export default Form