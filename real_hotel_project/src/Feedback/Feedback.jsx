import React, { useState, useEffect } from 'react';
import styles from './Feedback.module.css';
import 'animate.css';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate__fadeInLeft');
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const comments = [
    {
      id: 1,
      text: "Отличный проект! Очень доволен результатом.",
      author: "Иван Иванов"
    },
    {
      id: 2,
      text: "Интуитивно понятный интерфейс и быстрая работа. Спасибо!",
      author: "Петр Петров"
    },
    {
      id: 3,
      text: "Легко и приятно пользоваться. Рекомендую всем!",
      author: "Анна Сидорова"
    },
    {
      id: 4,
      text: "Это просто космос! Вы сделали потрясающую работу.",
      author: "Михаил Кузнецов"
    }
  ];

  const handlePrevious = () => {
    clearInterval(autoPlayInterval);
    setIsAnimating(true);
    setAnimationClass('animate__fadeInRight');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? comments.length - 1 : prevIndex - 1));
    startAutoPlay();
  };

  const handleNext = () => {
    clearInterval(autoPlayInterval);
    setIsAnimating(true);
    setAnimationClass('animate__fadeInLeft');
    setCurrentIndex((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
    startAutoPlay();
  };

  const startAutoPlay = () => {
    setAutoPlayInterval(
      setInterval(() => {
        setIsAnimating(true);
        setAnimationClass('animate__fadeInLeft');
        setCurrentIndex((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
      }, 5000)
    );
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div className={styles.root}>
      <div className={styles.carousel}>
        <div className={styles.title}>ОТЗЫВЫ НАШИХ ГОСТЕЙ</div>
        <div className={styles.buttonsBlock}>
          <button className="prev-btn" onClick={handlePrevious}>
            &lt;
          </button>
          <button className="next-btn" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div
          className={`${styles.commentContainer} ${isAnimating ? `animate__animated ${animationClass}` : ''}`}
        >
          <p className="comment-text">{comments[currentIndex].text}</p>
          <p>&#9660;</p>
          <p className="comment-author">- {comments[currentIndex].author}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
