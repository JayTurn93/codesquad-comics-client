import styles from "../App.module.css"
import { Link } from "react-router-dom";

function Footer({user, setUser}) {
    return (
    <div>
        <footer>
            <div className={styles.feet}>
                <div>
                    <div className={styles.feetheads}>VISIT US</div><br />
                        <div>
                            CodeSquad Comics <br />
                            123 Dorchester Avenue <br />
                            Boston, MA 02124 <br />
                        </div>
                    </div>
                    <div>
                        <div className={styles.feetheads}>LINKS</div><br />
                        <Link href="/">Home</Link><br />
                        <Link href="/about">About</Link><br />
                        <Link href="/login">Login</Link><br />
                    </div>
                    <div>
                        <div className={styles.feetheads}>FOLLOW US</div><br />
                        <div>
                            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
                        </div>
                    </div>
                    <span>
                        <div className={styles.feetheads}>A PRODUCT OF</div><br />
                        <div>
                            <a href="#">
                            <img src="./images/CodeSquad-logo.jpg" alt="CodeSquad"/></a>
                        </div>
                    </span> 
                </div> 
            </footer>
        </div>
    )
}

export default Footer; 