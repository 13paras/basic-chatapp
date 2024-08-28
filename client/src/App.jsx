import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "preline/preline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthcontext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthcontext();
  /*   const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]); */
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={authUser ? <Home /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
