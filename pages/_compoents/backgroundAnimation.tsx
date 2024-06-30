import React from 'react';
import styles from '../../styles/Backgroud.module.css'; // Import the CSS module

const BackgroundAnimation = () => {
    return (
        <div className={styles.background}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            {/* Add more circles as needed */}
        </div>
    );
};

export default BackgroundAnimation;