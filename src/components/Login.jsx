import { useState } from "react";

function Login({user, setUser}) {
  console.log("logintest", user);
  const handleUserChange = (e) => {
    e.preventDefault()
    setUser(e.target.value) //shows not a function 
    console.log("user changes >>>", user);
}


    return (
      <div>
        <main>
            <div className="container">
            <h1>LOGIN</h1>
            <div className="cform">
                <div className="createcenter">
                <label htmlFor="email" >Email address:</label>
                <input type="email"  value={user} id="email" placeholder="Email" onChange={(handleUserChange)} />
                </div> <br />
                <div className="createcenter">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"/>
                </div>
            </div>
            <div className="loginbutton">
            <button className="submitbutton">Submit</button>
            </div>
            </div>
        </main>
      </div>
    )
  }

export default Login; 