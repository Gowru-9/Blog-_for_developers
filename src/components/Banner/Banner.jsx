import './Banner.css';

function Banner() {
    return(
        <> 
        <div className='banner-div'>
        <div className="overlay">
        <h1 id='title-div'>Welcome  To My Blogs  </h1>
         </div>
        <img src={`${import.meta.env.BASE_URL}young-friends-eating-food.jpg`} alt="welcome banner" width="100%" height="750px" style={{objectFit: 'cover'}} />

        </div>
        </>
    )
}
export default Banner;