import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HRAssistant from "./pages/HRAssistant";
import LoginForm from "./pages/LoginForm";
import OrganizationPage from "./pages/OrganizationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assistant" element={<HRAssistant />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/org-form" element={<OrganizationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
