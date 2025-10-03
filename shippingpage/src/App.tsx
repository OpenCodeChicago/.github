import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShippingPage from "./ShippingPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shipping-policy" element={<ShippingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
