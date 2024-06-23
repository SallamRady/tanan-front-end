import { Routes, Route } from "react-router-dom";

export default function MainRouterProvider() {
  // * declare and define our routes..
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
    </Routes>
  );
}
