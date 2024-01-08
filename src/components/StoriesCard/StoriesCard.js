import React from 'react';
import styles from './StoriesCard.module.css';

const StoriesCard = ({title, imageSrc}) => {
    return (
        <div className={styles.storyCard}>
            <div className={styles.img}>
                <img src={imageSrc} alt=""/>
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    );
};

export default StoriesCard;