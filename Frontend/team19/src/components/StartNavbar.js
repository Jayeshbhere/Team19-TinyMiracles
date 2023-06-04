import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";

const StartNavbar = () => {
   
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
    return ( 
  
    



        <>
       <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        </div>
    </>
    
      
      );
}
 
export default StartNavbar;

