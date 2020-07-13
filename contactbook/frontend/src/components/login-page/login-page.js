import React, { useState } from 'react'
import MainWrapper from '../wrappers/wrappers';
import './login-page.css';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ loginUser, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginFormSubmit = (e) => {
        e.preventDefault()
        loginUser(formData)
    }

    const loginPage = (
        <MainWrapper>
            <div className="form-wraper">
                <h2 className="login-form-heading">Вход в аккаунт</h2>
                <form
                    className="login-form"
                    onSubmit={handleLoginFormSubmit}>
                    <label className="login-form__label">
                        <div className="login-form__input-name" >Логин</div>
                        <input
                            className="login-form__input"
                            type="text"
                            name="username"
                            onChange={handleInputChange} />
                    </label>
                    <label className="login-form__label">
                        <div className="login-form__input-name" >Пароль</div>
                        <input
                            className="login-form__input"
                            type="password"
                            name="password"
                            onChange={handleInputChange} />
                    </label>
                    <button
                        type="submit"
                        className="login-form__button">
                        Войти
                    </button>
                </form >
            </div>
        </MainWrapper>
    )

    return (
        <React.Fragment>
            {
                isAuthenticated
                    ? <Redirect to="/" />
                    : loginPage
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(LoginPage);
