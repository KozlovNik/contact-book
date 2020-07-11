import React from 'react'
import MainWrapper from '../wrappers/wrappers';
import './login-form.css';

const LoginForm = () => {
    return (
        <MainWrapper>
            <div className="form-wraper">
                <h2 className="login-form-heading">Вход в аккаунт</h2>
                <form className="login-form">
                    <label className="login-form__label">
                        <div className="login-form__input-name" >Логин</div>
                        <input
                            className="login-form__input"
                            type="text"
                            name="username" />
                    </label>
                    <label className="login-form__label">
                        <div className="login-form__input-name" >Пароль</div>
                        <input
                            className="login-form__input"
                            type="password"
                            name="password" />
                    </label>
                    <button type="submit" className="login-form__button">Войти</button>
                </form >
            </div>
        </MainWrapper>
    );
}

export default LoginForm
