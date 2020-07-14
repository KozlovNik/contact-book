import React, { useState } from 'react'
import MainWrapper from '../wrappers/wrappers';
import './register-page.css';
import { connect } from 'react-redux';
import { register } from '../../redux/actions';
import { useHistory } from 'react-router-dom';



const RegisterPage = ({ register }) => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    let history = useHistory();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginFormSubmit = (e) => {
        e.preventDefault()
        register(formData, () => { history.push('/') })
    }

    return (
        <MainWrapper>
            <div className="form-wraper">
                <h2 className="login-form-heading">Регистрация</h2>
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
                        <div className="login-form__input-name" >Почта</div>
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
                    <label className="login-form__label">
                        <div className="login-form__input-name" >Пароль</div>
                        <input
                            className="login-form__input"
                            type="password"
                            name="password2"
                            onChange={handleInputChange} />
                    </label>
                    <button
                        type="submit"
                        className="login-form__button">
                        Зарегистрироваться
                    </button>
                </form >
            </div>
        </MainWrapper>
    );
}

export default connect(null, { register })(RegisterPage);
