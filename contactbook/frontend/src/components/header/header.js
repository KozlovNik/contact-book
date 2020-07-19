import React, { Fragment } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';


const Header = ({ isAuthenticated, logout }) => {

    const handleLogoutClick = (e) => {
        e.preventDefault();
        logout();
    }
    let value = isAuthenticated
        ? (
            <li className="header-auth-list__element">
                <button className="header-auth-list__button"  onClick={handleLogoutClick}>Выйти</button>
            </li>
        )
        : (
            <Fragment>
                <li className="header-auth-list__element">
                    <Link className="header-auth-list__link" to="/register">Регистрация</Link>
                </li>
                <li className="header-auth-list__element">
                    <Link className="header-auth-list__link" to="/login">Войти</Link>
                </li>
            </Fragment>
        )
    return (
        <header className="header">
            
            <h1 className="header__element header__element--heading">
                <i className="fa fa-address-book" aria-hidden="true"></i>
                Книга контактов
            </h1>
            <ul className="header__element header-auth-list">
                {value}
            </ul>
        </header>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Header)
