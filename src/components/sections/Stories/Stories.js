import React from 'react';
import {StoriesCard} from "../../index";
import styles from './Stories.module.css'

const Stories = () => {
    return (
        <div className={styles.stories}>
            <StoriesCard title={'Скидки'} imageSrc={''}/>
        </div>
    );
};

export default Stories;