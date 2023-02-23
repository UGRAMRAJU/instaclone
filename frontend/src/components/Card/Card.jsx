import { useState } from 'react';
import './Card.css'
const Card=({post})=>{
    const[like, setLike] = useState(0);
    const LikesIncrease =()=>{
        setLike(like+1)
    }
    return (
      <>
        <section className="card-container">
          <section className='card-header-top-box'>
            <div>
              <div className="card-header-name">{post.name}</div>
              <div className="card-header-location">{post.location}</div>
            </div>
            <div className='three-dots'><img src={require("../images/dots.png")} alt="ecllises"/></div>
            </section>
          <section className="card-img-folder">
            <img
              src={`https://instaclonebackend-project.onrender.com/image/${post.file_name}`}
              alt="posted-pic"
            />
          </section>
          <section className="bottom-box">
            <section className='likes-shares-date'>
                <div>
                <span className='likes'><img className='red-clr' src={require("../images/heart.png")} alt="likes" onClick={LikesIncrease}/></span>
                <span className='share'><img src={require("../images/share.png")} alt="share"/></span>
                </div>
                <div className='date-print'>{post.date.slice(0,10)}</div>
            </section>
            <div className='likes-count'>likes{like}</div>
          <div className="description-part">{post.description}</div>
          </section>
        </section>
      </>
    );
}
export default Card;