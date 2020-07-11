import React from 'react'
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__element header__element--heading">
                <i class="fa fa-address-book" aria-hidden="true"></i>
                Книга контактов
            </h1>
            <ul className="header__element header-auth-list">
                <li className="header-auth-list__element">Регистрация</li>
                <li className="header-auth-list__element">Войти</li>
            </ul>
        </header>
    )
}

export default Header
