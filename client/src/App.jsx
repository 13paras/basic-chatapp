import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "preline/preline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthcontext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthcontext();
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
          // element={<Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
