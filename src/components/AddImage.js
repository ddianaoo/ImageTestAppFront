import React, { useState } from 'react';
import axios from 'axios';

const AddImage = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleImageUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        axios.post('http://127.0.0.1:8000/api/images/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log(response.data);
            const imageId = response.data.id;
            console.log(imageId);
        })
        .catch((error) => {
            console.error(error);
        });

    };

    return (
        <div>
            <form onSubmit={handleImageUpload}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type='submit' style={{backgroundColor: 'green'}}>Submit</button>
            </form>
        </div>
    );
};

export default AddImage;