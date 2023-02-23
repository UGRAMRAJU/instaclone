import { React, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Form.css'

function Form() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("")
    const uploadPost = () => {
        const formdata = new FormData();
        formdata.append("image_files", image);
        formdata.append("name", name);
        formdata.append("location", location);
        formdata.append("description", description);

        fetch("https://instaclonebackend-project.onrender.com/uploads", {
            method: "POST",
            body: formdata,
        });
    }

    return (
        <>
            <section>
                <Header />
                <form className="from-container">
                    <div className='files'>
                        <input className="file-name-box" type="text" value={image.name} placeholder="No file chosen" />
                        <input type="file" required
                            onChange={(e) => {
                                setImage(e.target.files[0])
                            }}
                        />
                    </div>
                    <div className='two-containers'>
                        <input placeholder="Author" type="text" required value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <input placeholder="Location" type="text" required value={location}
                            onChange={(e) => {
                                setLocation(e.target.value)
                            }}
                        />
                    </div>
                    <div className='description-container'>
                        <input type="text" placeholder="Description" value={description} required
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />
                    </div>
                    <div className='btn'>
                        <Link to="/PostView">
                            <button className="post-btn" onClick={uploadPost}>Post</button>
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
}
export default Form;