 import React from "react";
import './Login.css';

function Login () {
  return (
    <>
    <div>
     
    <form action="">

        <h1>Welcome to Login Page</h1>
        <h2> Please Login:</h2>
        <label htmlFor="username">Username:
        <input type="text" name="username" id="username" /> </label>
        <br />
        <label htmlFor="password">Password:
        <input type="password" name="password" id="password" /> </label>
        <br />
        <button type="submit">Login</button>
    </form>
    </div>
    </>
  );

}
export default Login;