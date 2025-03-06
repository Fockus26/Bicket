import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn(props) {
  const { setIsLogin } = props
  const [ showPassword, setShowPassword ] = useState(false)
  const navigate = useNavigate();

  const submitSignIn = e => {
    e.preventDefault();
    setIsLogin(true);
    navigate('/');
  };

  return (
    <main id='Authentication' className='signIn'>
      <form action="" className='container' onSubmit={submitSignIn}>

        <h1>Sign In</h1>

        <fieldset>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" name="Email" required />
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <div className='containerPassword'>
              <input type={`${showPassword ? "text" : "password"}`} id="Password" name="Password" required />
              <i className={`fa-solid fa-eye${showPassword ? "-slash" : ""}`} onClick={() => setShowPassword(!showPassword)}/>
            </div>
          </div>

          <div className='containerRemember'>
            <input type="checkbox" id="Remember" name="Remember" />
            <label htmlFor="Remember">Remember me for 14 days</label>
          </div>

          <button type="submit">Sign In</button>
        </fieldset>
      </form>
    </main>
  );
}

export default SignIn;
