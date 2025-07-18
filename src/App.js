import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // redirect to Home after login
    } else {
      navigate("/login"); // redirect to Login after logout
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" replace />}
      <Outlet context={login} />
    </div>
  );
}

export default App;
