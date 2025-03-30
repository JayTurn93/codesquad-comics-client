import About from "./components/About"
import Admin from "./components/Admin"
import Create from "./components/Create"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Update from "./components/Update"
import Footer from "./shared/Footer"
import Header from "./shared/Header"

function App() {
  return (
    <div>
      <Header />
      <About />
      <Admin />
      <Create />
      <Home />
      <Login />
      <Signup />
      <Update/>
      <Footer />
    </div>
  )
}

export default App;
