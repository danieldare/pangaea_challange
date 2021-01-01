import { func } from 'prop-types';
import React from 'react';
import CartIcon from '../../../assets/images/cart.png';

export default function Navbar({ toggleSideDrawer }) {
    return (
        <div className="navbar">
            <div className="brand-name">Logo</div>
            <ul className="links">
                <li className="link">Shop</li>
                <li
                    className="link"
                    onKeyPress={toggleSideDrawer}
                    onClick={toggleSideDrawer}
                    role="presentation">
                    <img className="cart" src={CartIcon} alt="cart" />
                    <span className="cart-item-count">3</span>
                </li>
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    toggleSideDrawer: func.isRequired
};
