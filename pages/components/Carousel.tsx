import React, { useState } from 'react';
import styles from '../../styles/Carousel.module.css';

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        <button onClick={goToPrevious} className={`${styles.arrowButton} ${styles.leftArrow}`}>
          <img src="/leftarrow.svg" alt="left arrow" className={styles.arrowImage} />
        </button>
        <img src={images[currentIndex]} alt="carousel" className={styles.carouselImage} />
        <button onClick={goToNext} className={`${styles.arrowButton} ${styles.rightArrow}`}>
          <img src="/rightarrow.svg" alt="right arrow" className={styles.arrowImage} />
        </button>
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`${styles.thumbnail} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            alt={`thumbnail ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
