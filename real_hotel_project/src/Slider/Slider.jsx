import styles from './Slider.module.css'
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL;

function Slider() {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('slider');
    const [currentIndex, setCurrentIndex] = useState(0);
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

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    return (
        <div className={styles.root}>
            <div className={styles.slider}>
                {images.length > 0 && (
                    <div
                        className={`${styles.slide} ${currentIndex === 0 ? styles.active : ''} ${currentIndex > 0 ? styles['next-slide'] : ''} ${currentIndex < images.length - 1 ? styles['prev-slide'] : ''}`}
                    >
                        <img src={images[currentIndex].image} alt="" />
                    </div>
                )}
                {images.length > 0 && <img src={images[currentIndex].image} alt="mainImage" />}
                <button className={styles.leftButton} onClick={() => prevSlide()}>&#8592;</button>
                <button className={styles.rightButton} onClick={() => nextSlide()}>&#8594;</button>
            </div>
        </div>
    )
}

export default Slider;
