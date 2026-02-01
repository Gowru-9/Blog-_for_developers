import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import TrendingBlogs from "../../components/TrendingBlogs/TrendingBlogs.jsx";
import Footer from "../../components/footer/Footer.jsx";
import blogs from "../../components/Utills/MockData.js";
import "./CatagoryBlog.css";
import { useParams } from "react-router-dom";

function CatagoryBlogs() {
  const { Category } = useParams();
  const currentCategory = Category;

  return (
    <>
        <Banner />
      <div className="mt-3">
        <h1>{currentCategory} Blogs</h1>
      </div>
      <div className="trendingBlogs d-flex  justify-content-around  m-3 flex-wrap  row-gap-4">
        {
        blogs.map(blog =>blog.category== currentCategory &&
           <TrendingBlogs  blogs={blog} />)}
      </div>

   
      {/* <div className="mt-3">
        <h1>Explore Categories</h1>
        <div className="d-flex justify-content-center">
          <div className="card" style={{ width: "20rem", cursor: "pointer", margin: "0 10px" }} onClick={() => navigate('/blogs/Programming')}>
            <img src="/programming.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Programming</h5>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", cursor: "pointer", margin: "0 10px" }} onClick={() => navigate('/blogs/Health')}>
            <img src="/LifeStyle.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Health</h5>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", cursor: "pointer", margin: "0 10px" }} onClick={() => navigate('/blogs/Cooking')}>
            <img src="/food.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cooking</h5>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", cursor: "pointer", margin: "0 10px" }} onClick={() => navigate('/blogs/Travelling')}>
            <img src="/Traveling.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Travelling</h5>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", cursor: "pointer", margin: "0 10px" }} onClick={() => navigate('/blogs/Workouts')}>
            <img src="/workouts.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Workouts</h5>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="mt-3">
        <h1>All Blogs</h1>
      </div>
      <div className="trendingBlogs d-flex  justify-content-around  m-3 flex-wrap  row-gap-4">
        {blogs.map((blog) => (
          <TrendingBlogs key={blog.id} blogs={blog} />
        ))}
      </div> */}

      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}
export default CatagoryBlogs;
