import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutUsPage from "../pages/AboutUs";
import ServicePage from "../pages/Services";
import ContactUsPage from "../pages/ContactUs";

export default function MainRouterProvider() {
  // * declare and define our routes..
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
}
