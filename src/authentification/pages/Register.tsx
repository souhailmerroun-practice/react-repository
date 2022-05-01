import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../../App";
import { FirebaseContext } from "../context/FirebaseContext";

function Register() {

    const navigate = useNavigate();

    const { createUserWithEmailAndPassword } = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(email, password);
            navigate(ROUTE_HOME);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;