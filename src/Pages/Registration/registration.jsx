import React from "react";
import "./registration.css"

function Registration() {
  return (
    <>
    <div>
     
    <form action="">

        <h1>Welcome to Registration Page</h1>
        <h2> Please SinUp</h2>
        <label htmlFor="name">Name:
        <input type="text" name="name" id="name" /> </label>
        <br />
        <label htmlFor="email">Email:
        <input type="email" name="email" id="email" /></label>
        <br />
        <label htmlFor="password">Password:
        <input type="password" name="password" id="password" /> </label>
        <br />
        <button type="submit">Register</button>
     </form>
    </div>
    </>
  );

}
export default Registration;