import React, { useState } from 'react';
import axios from 'axios';

const AddImage = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };    

    const handleImageUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);

        axios.post('http://127.0.0.1:8000/api/images/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <form onSubmit={handleImageUpload}>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type='submit' style={{backgroundColor: 'green'}}>Submit</button>
            </form>
        </div>
    );
};

export default AddImage;