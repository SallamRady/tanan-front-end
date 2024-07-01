import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutUsPage from "../pages/AboutUs";

export default function MainRouterProvider() {
  // * declare and define our routes..
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
}
