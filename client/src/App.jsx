import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
