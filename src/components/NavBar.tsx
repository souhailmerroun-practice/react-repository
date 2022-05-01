import { useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../authentification/context/FirebaseContext";

function NavBar() {
    const { currentUser, signOut } = useContext(FirebaseContext);

    const handleLogout = () => {
        signOut();
    }

    return <>
        <ul>
            <li><Link to="/">Home</Link></li>
            {
                currentUser ?
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </> :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
            }
        </ul>
        {currentUser && <p>You are logged in as {currentUser.email}</p>}
    </>
}

export default NavBar;