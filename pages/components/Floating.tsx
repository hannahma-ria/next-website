import React from 'react';
import styles from '../../styles/Floating.module.css';

const Floating: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/astronautFloating.jpg" alt="Floating" className={styles.floatingImage} />
    </div>
  );
};

export default Floating;
