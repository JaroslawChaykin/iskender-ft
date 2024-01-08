import React from 'react';
import styles from './IskButton.module.css'

const IskButton = ({fontWeight = 'normal', fontSize = 'normal', type = 'primary', children, clickHandler}) => {

    return (
        <button
            className={`
                ${styles['btn-text-weight-' + fontWeight] || ''}
                ${styles['btn-text-size-' + fontSize] || ''}
                ${styles['btn-type-' + type] || ''}
            `}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default IskButton;