import Banner from '../../components/Banner/Banner.jsx';
import './DedicatedBlog.css';
import blogs from '../../components/Utills/MockData.js';
import { useParams } from 'react-router-dom';

function DedicatedBlog() {
    const { id } = useParams();
    let BlogDisplay = blogs.filter(blog => blog.id == id)[0];
    
    // Optional: Add a check if BlogDisplay is undefined
    if (!BlogDisplay) {
        return <div>Blog not found</div>;
    }
    
    return (
        <>
            <Banner />
            <h1>{BlogDisplay.title}</h1>
            <h3>{BlogDisplay.category}</h3>
            <p>{BlogDisplay.content}</p>
        </>
    );
}

export default DedicatedBlog;