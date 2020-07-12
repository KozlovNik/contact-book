import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__element header__element--heading">
                <i className="fa fa-address-book" aria-hidden="true"></i>
                Книга контактов
            </h1>
            <ul className="header__element header-auth-list">
                <li className="header-auth-list__element">Регистрация</li>
                <li className="header-auth-list__element">
                    <Link to="/login">Войти</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
