import React from 'react';
import styles from './Search.module.css'
import {Icon} from "../index";

const Search = () => {
    return (
        <div className={styles.search}>
            <span className={styles.icon}><Icon icon={'search'}/></span>
            <input type="text" placeholder={'Поиск'}/>
            <span className={styles.results}>32322</span>
        </div>
    );
};

export default Search;