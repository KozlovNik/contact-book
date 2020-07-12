import React, { useState } from 'react'
import MainWrapper from '../wrappers/wrappers';
import PrivateRoute from '../private-route/private-route';
import './login-form.css';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions';

const LoginForm = ({ getUser }) => {

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
        getUser(formData)
    }

    return (
        <MainWrapper>
            <PrivateRoute />
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
    );
}

export default connect(null, { getUser })(LoginForm);
