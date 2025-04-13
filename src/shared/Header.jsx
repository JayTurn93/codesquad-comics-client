function Header({user, setUser}) {
  console.log("");
    return (
      <div>
        <header>
            <nav>
                <div>
                <a href="#"><img src="./images/CodeSquad-Comics-logo.jpg" alt="CodeSquad Comics"/></a>
                </div>
                <div className="navspace">
                <div>
                <a href="#">HOME </a>
                </div>
                <div>
                <a href="#">ABOUT</a>
                </div>
                <div>
                <a href="#">LOGIN</a>
                </div>
                </div>
                <div className="mobnav">
                <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
      </div>
    )
  }

export default Header; 