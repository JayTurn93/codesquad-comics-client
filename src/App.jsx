import About from "./components/About"
import Admin from "./components/Admin"
import Create from "./components/Create"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Update from "./components/Update"
import Footer from "./shared/Footer"
import Header from "./shared/Header"
import { useState } from "react"

function App() {
  const [user, setUser] = useState (() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });
  
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <About />
      <Admin />
      <Create />
      <Home />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Update />
      <Footer />
    </div>
  )
}

export default App;
