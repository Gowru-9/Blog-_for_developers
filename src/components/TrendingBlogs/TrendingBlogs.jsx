import React from "react";
import './TrendingBlogs.css';
import { Link } from "react-router-dom";

function TrendingBlogs({blogs}){
    let image='';
    switch(blogs.category){
        case 'Programming':
            image='programming.jpg';  
            break;
        case 'Life Styles':
            image='LifeStyle.jpg';  
            break;
        case 'Cooking':
            image='Mfood.jpg';
            break;
        case 'Workouts':
            image='workouts.jpg';
            break;
        case 'Health':
            image='health.jpg';
            break;
        case 'Travelling':
            image='Traveling.jpg';
            break;
            
        default:
            image='Default.png';
    }
    return(
        <Link to={`/blog/${blogs.id}` }>
         <div className="card" style={{width: "20rem"}} >
            <img src={`/${image}`} className="card-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">  {blogs.title}</h5>
                <p className="card-text"> {blogs.description}</p>
                <p className="card-text text-muted "  > {blogs.category} </p>

                <a href="#" className="btn btn-primary"> Go somewhere </a>

              </div>
             </div>    

        </Link>
    )
}
export default TrendingBlogs;