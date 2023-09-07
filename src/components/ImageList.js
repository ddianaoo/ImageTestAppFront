import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/images/')
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h2>Images</h2>
            <ul>
                {images.map((image) => (
                    <li key={image.id}>
                        {image.title}
                        <img src={image.image} alt={image.title} width="185"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageList;