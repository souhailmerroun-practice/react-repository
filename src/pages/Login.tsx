import { useContext, useState } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

function Login() {

    const { signInWithEmailAndPassword } = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            signInWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;