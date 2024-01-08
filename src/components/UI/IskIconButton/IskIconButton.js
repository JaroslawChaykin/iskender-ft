import React from 'react';
import styles from "./IskIconButton.module.css";
import {Icon} from "../index";


const IskIconButton = ({
                           icon,
                           children,
                           type = 'primary',
                           iconForm,
                           fontWeight = 'normal',
                           fontSize = 'normal',
                           border = false,
                       }) => {

    return (
        <button
            className={`
                        ${styles['icon-btn']}
                        ${styles['icon-btn-text-weight-' + fontWeight] || ''}
                        ${styles['icon-btn-text-size-' + fontSize] || ''}
                        ${styles['icon-btn-type-' + type] || ''}
                        ${styles['icon-btn-icon-form-' + iconForm] || ''}
                        ${border ? styles['icon-btn-border'] : ''}
                    `}
        >
                    <span className={styles.icon}>
                        {icon ? <Icon icon={icon}/> : ''}
                    </span>
            {children ? <span>{children}</span> : ''}
        </button>
    );
};

export default IskIconButton;