import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";

export default function MainRouterProvider() {
  // * declare and define our routes..
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<h1>About Page</h1>} />
    </Routes>
  );
}
