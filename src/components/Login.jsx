import { useState } from "react"; // i also turned this off and im not sure if it makes a difference 
import styles from "../App.module.css"

function Login({user, setUser}) {
  const [password, setPassword] = useState("");
  console.log("logintest", user);
  const handleUserChange = (e) => {
    e.preventDefault()
    setUser(e.target.value) //shows not a function, UPDATE: fixed by adding value property to App.jsx
    // console.log("user changes >>>", user);
}
const handlePasswordChange = (e) => {
  e.preventDefault()
  setPassword(e.target.value)
  // console.log("pass changes >>>", password);
}
const handleSubmitLogin = (e) => {
  e.preventDefault()
  console.log("trying to",user, password);
  
}


    return (
      <div>
        <main>
            <div className={styles.container}>
            <h1>LOGIN</h1>
            <div className={styles.cform}>
              <form onSubmit={handleSubmitLogin}>
                <div className="createcenter">
                  <label htmlFor="email" >Email address:</label>
                  <input type="email"  value={user} id="email" placeholder="Email" onChange={handleUserChange} />
                </div> <br />
                <div className={styles.createcenter}>
                  <label htmlFor="password" type="password" >Password:</label>
                  <input
                      type="password"
                      value={password}
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={handlePasswordChange} />
                </div>
                <div className={styles.loginbutton}>
                  <input type="submit"  />
                </div>
              </form>
            </div>
            </div>
        </main>
      </div>
    )
  }

export default Login; 