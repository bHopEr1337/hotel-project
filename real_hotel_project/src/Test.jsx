import { useState, useEffect } from "react"

const API_URL = import.meta.env.VITE_API_URL;

function Test() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('vk');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}images/?title=${title}`);
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [API_URL, title]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Search by title" />
      {images.map((image) => (
        <img key={image.id} src={image.image} alt={image.title} />
      ))}
    </div>
  );
}

export default Test;
