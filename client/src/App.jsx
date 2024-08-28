import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home/Home";

const App = () => {
  /*   const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]); */
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
    </div>
  );
};

export default App;
