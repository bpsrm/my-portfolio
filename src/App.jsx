import { Main } from "./pages/Main";

import { useState, useEffect, Suspense } from "react";
import { BarLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <Suspense
      fallback={
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={containerStyle}
        >
          <BarLoader className="w-25 loader" color="#854ce6" height={5} />
        </div>
      }
    >
      {loading ? (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={containerStyle}
        >
          <BarLoader className="w-25 loader" color="#854ce6" height={5} />
        </div>
      ) : (
        <Main />
      )}
    </Suspense>
  );
};

export default App;
