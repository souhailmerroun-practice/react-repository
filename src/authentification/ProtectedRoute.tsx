import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_LOGIN } from "../App";
import { FirebaseContext } from "./context/FirebaseContext";

interface Props {
    children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
    const { currentUser } = useContext(FirebaseContext);

    if (currentUser) {
        return <Navigate to={ROUTE_LOGIN} />
    }

    return children;
}

export default ProtectedRoute;