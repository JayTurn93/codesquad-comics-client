function Login(props) {
  console.log(props);

  function handleForm(e) {
    e.preventDefault();
  }
    return (
      <div>
        <main>
            <div className="container">
            <h1>LOGIN</h1>
            <div className="cform">
                <div className="createcenter">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" id="email" placeholder="Email" />
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