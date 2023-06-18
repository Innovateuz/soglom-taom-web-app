import React, { useEffect } from "react";
import { Routers } from "./routes";
import { useNavigate } from "react-router-dom";
import { useProductsStore } from "./store/products";
import { setInit } from "./utils/lovely";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  const { setLovely } = useProductsStore();

  useEffect(() => {
    // @ts-ignore
    setInit(setLovely);
    navigate("/main");
  }, []);

  return (
    <div className="App">
      <ToastContainer  />
      <Routers />
    </div>
  );
}

export default App;
