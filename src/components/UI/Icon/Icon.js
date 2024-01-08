import React from 'react';

import searchIcon from '../../../assets/images/icons/search.svg';
import burgerMenuIcon from '../../../assets/images/icons/burgerMenu.svg';
import cartIcon from '../../../assets/images/icons/cart.svg';
import clockSquareIcon from '../../../assets/images/icons/clockSquare.svg';
import heartIcon from '../../../assets/images/icons/heart.svg';
import heartFillIcon from '../../../assets/images/icons/heart-fill.svg';
import locationIcon from '../../../assets/images/icons/location.svg';
import minusIcon from '../../../assets/images/icons/minus.svg';
import plusIcon from '../../../assets/images/icons/plus.svg';
import phoneIcon from '../../../assets/images/icons/phone.svg';
import profileIcon from '../../../assets/images/icons/profile.svg';

const icons = {
    search: searchIcon,
    burgerMenu: burgerMenuIcon,
    cart: cartIcon,
    clockSquare: clockSquareIcon,
    heart: heartIcon,
    heartFill: heartFillIcon,
    location: locationIcon,
    minus: minusIcon,
    plus: plusIcon,
    phone: phoneIcon,
    profile: profileIcon,
}

const Icon = ({icon}) => {
    return (
        <img src={icons[icon]} alt="icon"/>
    );
};

export default Icon;