import React from 'react';
import styles from './Header.module.css'
import Container from "../../Container/Container";
import {IskIconButton} from "../../UI";
import logoSvg from "../../../assets/images/svg/Logo.svg";
import Search from "../../UI/Search/Search";

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.headerBox}>
                    <div className={styles.headerLeft}>
                        <div>
                            <img src={logoSvg} alt="logo"/>
                        </div>
                        <IskIconButton icon={'burgerMenu'}>Каталог</IskIconButton>
                    </div>
                    <div className={styles.headerSearch}>
                        <Search/>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.auth}>
                            Добро пожаловать
                            <span>Вход/Регистрация</span>
                        </div>
                        <div className={styles.headerButtons}>
                            <IskIconButton icon={'profile'} type={'icon'} iconForm={'circle'} border/>
                            <div className={styles.splitter}></div>
                            <IskIconButton icon={'cart'} type={'icon'} iconForm={'circle'} border/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;