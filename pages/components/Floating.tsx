import React, { useEffect } from 'react';
import styles from '../../styles/Floating.module.css';

interface FloatingImageProps {
  imageSrc: string;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ imageSrc }) => {
  useEffect(() => {
    const floatingImage = document.getElementById('floatingImage') as HTMLImageElement;
    if (floatingImage) {
      const animate = () => {
        const container = floatingImage.parentElement as HTMLElement;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const x = Math.random() * (containerWidth - floatingImage.clientWidth);
        const y = Math.random() * (containerHeight - floatingImage.clientHeight);
        floatingImage.style.transform = `translate(${x}px, ${y}px)`;
      };
      animate();
      const interval = setInterval(animate, 2000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className={styles.container}>
      <img
        id="floatingImage"
        src={imageSrc}
        alt="Floating"
        className={styles.floatingImage}
      />
    </div>
  );
};

export default FloatingImage;
