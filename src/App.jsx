import React from "react";
import FormData from "./pages/FormData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaxDiscount from "./pages/TaxDiscount";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormData />} />
        <Route path="/tax" element={<TaxDiscount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;