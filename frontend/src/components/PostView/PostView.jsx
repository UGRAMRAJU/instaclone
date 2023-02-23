import React,{useState, useEffect} from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./PostView.css";
const PostView=()=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
      fetch("https://instaclonebackend-project.onrender.com/all")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => console.log(err));
  },[])
    return(
        <>
        <section className="post-view-container">
            <Header/>
        <div className="card-container">
          {posts?.result
            ?.map?.((post, _id) => {
              return <Card post={post} key={post._id} />;
            })
            .reverse()}
        </div>

        </section>
        </>
    )
}
export default PostView;