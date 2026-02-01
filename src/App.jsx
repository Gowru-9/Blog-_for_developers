import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Registration from "./Pages/Registration/registration.jsx";
import Login from "./Pages/Login/Login.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import CatagoryBlogs from "./Pages/CatagoryBlogs/CatagoryBlog.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import DedicatedBlog from "./Pages/DedicatedBlog/DedicatedBlog.jsx";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/blogs/:Category" element={<CatagoryBlogs />} />
        <Route path="/blog/:id" element={<DedicatedBlog />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
