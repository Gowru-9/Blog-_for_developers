import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import TrendingBlogs from "../../components/TrendingBlogs/TrendingBlogs.jsx";
import blogs from "../../components/Utills/MockData.js";
import "./Home.css";
import DedicatedBlog from "../DedicatedBlog/DedicatedBlog.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Banner />
      <div className="mt-3">
        <h1>Read Blogs form </h1>
        <div className="d-flex justify-content-around row-gap-2 flex-wrap">

          <Link to="/blogs/Programming">
            <div className="card" style={{ width: "20rem" }}>
              <img src={`${import.meta.env.BASE_URL}programming.jpg`} id="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Programming </h5>
                {/* <p className="card-text">Some quick.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </Link>

          <Link to="/blogs/Health">
            <div className="card" style={{ width: "20rem" }}>
              <img src={`${import.meta.env.BASE_URL}LifeStyle.jpg`} id="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Life Styles </h5>
                {/* <p className="card-text">Some quick example </p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </Link>

          <Link to="/blogs/Cooking">
            <div className="card" style={{ width: "20rem" }}>
              <img src={`${import.meta.env.BASE_URL}food.jpg`} id="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Food </h5>
                {/* <p className="card-text">Some quick example </p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </Link>

          <Link to="/blogs/Travelling">
            <div className="card" style={{ width: "20rem" }}>
              <img src={`${import.meta.env.BASE_URL}Traveling.jpg`} id="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Travelling</h5>
                {/* <p className="card-text">Some quick example </p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </Link>
          
        </div>
      </div>

      <div className="mt-3">
        <h1>Trending Blogs </h1>
      </div>
      <div className="trendingBlogs d-flex  justify-content-around  m-3 flex-wrap  row-gap-4">
        {blogs.map((blog) => 
          <TrendingBlogs blogs={blog} />
        )}
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}
export default Home;
