import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './authentification/pages/Login';
import Profile from './authentification/pages/Profile';
import Register from './authentification/pages/Register';
import * as Sentry from "@sentry/react";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Sentry.withProfiler(App);
