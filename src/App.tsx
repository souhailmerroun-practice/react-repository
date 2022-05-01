import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './authentification/pages/Login';
import Profile from './authentification/pages/Profile';
import Register from './authentification/pages/Register';
import * as Sentry from "@sentry/react";
import { useContext } from 'react';
import { FirebaseContext } from './authentification/context/FirebaseContext';

export const ROUTE_HOME = "/";
export const ROUTE_LOGIN = "/login";
export const ROUTE_REGISTER = "/register";
export const ROUTE_PROFILE = "/profile";

function App() {

  const { currentUser } = useContext(FirebaseContext);

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_LOGIN} element={currentUser ? <Navigate to={ROUTE_PROFILE} /> : <Register />} />
        <Route path={ROUTE_REGISTER} element={currentUser ? <Navigate to={ROUTE_PROFILE} /> : <Register />} />
        <Route path={ROUTE_PROFILE} element={currentUser ? <Profile /> : <Navigate to={ROUTE_LOGIN} />} />
      </Routes>
    </div>
  );
}

export default Sentry.withProfiler(App);
