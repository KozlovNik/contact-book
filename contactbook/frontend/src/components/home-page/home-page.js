import React from 'react';
import "./home-page.css"

const HomePage = () => {
    return (
        <div className="home-page">
            <form className="home-page__el home-page-form">
                <h2 className="home-page-form__heading">Добавить контакт</h2>
                <input
                    className="home-page-form__input"
                    placeholder="Имя"
                    name="name" />
                <input
                    className="home-page-form__input"
                    placeholder="Email"
                    name="email" />
                <input
                    className="home-page-form__input"
                    placeholder="Номер телефона"
                    name="phone" />
                <h3>Тип контакта</h3>
                <label className="home-page-form__label">
                    Личный
                    <input type="radio" name="contact_type" />
                </label>
                <label>
                    Рабочий
                    <input type="radio" name="contact_type" />
                </label>
            </form>
            <div className="home-page__el">
                <input
                    placeholder="Фильтр"
                    className="home-page-form__input" />
                <div>У вас пока нет добавленных контактов</div>
            </div>
        </div>
    );
}

export default HomePage;