import React, { useEffect, useState } from 'react';
import "./home-page.css";
import { connect } from 'react-redux';
import { getContacts, addContact } from '../../redux/actions';

const HomePage = ({ getContacts, addContact, contacts }) => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        contact_type: 'personal'
    })
    useEffect(() => {
        getContacts()
    }, [getContacts])
    const handleFormButtonClick = (e) => {
        e.preventDefault();
        addContact();
    }
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const contactList =
        contacts.map(({ id, name, email, phone, contact_type }) => {
            return (
                <li key={id}>
                    <div>{name}</div>
                    <div>{email}</div>
                    <div>{phone}</div>
                    <div>{contact_type}</div>
                </li>
            )
        })


    return (
        <div className="home-page">
            <form className="home-page__el home-page-form">
                <h2 className="home-page-form__heading">Добавить контакт</h2>
                <input
                    className="home-page-form__input"
                    placeholder="Имя"
                    name="name"
                    onChange={handleInputChange} />
                <input
                    className="home-page-form__input"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange} />
                <input
                    className="home-page-form__input"
                    placeholder="Номер телефона"
                    name="phone"
                    onChange={handleInputChange} />
                <h3>Тип контакта</h3>
                <label className="home-page-form__label">
                    Личный
                    <input
                        type="radio"
                        name="contact_type"
                        value="personal"
                        checked={inputs.contact_type === 'personal'}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Рабочий
                    <input
                        type="radio"
                        name="contact_type"
                        checked={inputs.contact_type === 'professional'}
                        value="professional"
                        onChange={handleInputChange} />
                </label>
                <button
                    onClick={handleFormButtonClick}>
                    Добавить контакт
                </button>
            </form>
            <div className="home-page__el">
                <input
                    placeholder="Фильтр"
                    className="home-page-form__input" />
                <div>У вас пока нет добавленных контактов</div>
                <ul>
                    {contactList}
                </ul>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contactList
    }
}

export default connect(mapStateToProps, { getContacts, addContact })(HomePage);