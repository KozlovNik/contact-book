import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { clearContactItem, updateContact } from '../../redux/actions';

import "./forms.css";

const inputFields = {
    name: '',
    email: '',
    phone: '',
    contact_type: 'личный'
}

const EditForm = (props) => {
    const { clearContactItem, name, email, id, phone, contact_type, updateContact } = props;
    const [inputs, setInputs] = useState(inputFields);
    useEffect(() => {
        setInputs({ name, email, id, phone, contact_type })
    }, [name, email, id, phone, contact_type])
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    const handleInputChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleEditButtonClick = e => {
        e.preventDefault()
        updateContact(inputs)
    }

    const handleClearButton = e => {
        e.preventDefault()
        clearContactItem();
    }
    return (
        <form
            className="home-page__el home-page-form"
            onSubmit={handleFormSubmit}>
            <h2 className="home-page-form__heading">Редактировать контакт</h2>
            <input
                required
                type="text"
                className="home-page-form__input"
                placeholder="Имя"
                name="name"
                value={inputs.name}
                onChange={handleInputChange} />
            <input
                type="email"
                className="home-page-form__input"
                placeholder="Email"
                name="email"
                value={inputs.email}
                onChange={handleInputChange} />
            <input
                required type="text"
                className="home-page-form__input"
                value={inputs.phone}
                placeholder="Номер телефона"
                name="phone"
                onChange={handleInputChange} />
            <h3>Тип контакта</h3>
            <label className="home-page-form__label">
                Личный
                    <input
                    type="radio"
                    name="contact_type"
                    value="личный"
                    checked={inputs.contact_type === 'личный'}
                    onChange={handleInputChange} />
            </label>
            <label>Рабочий
                    <input
                    type="radio"
                    name="contact_type"
                    checked={inputs.contact_type === 'рабочий'}
                    value="рабочий"
                    onChange={handleInputChange} />
            </label>
            <button
                className="home-page-form__button"
                onClick={handleEditButtonClick}>
                Редактировать контакт
            </button>
            <button
                className="home-page-form__button"
                onClick={handleClearButton}>
                Очистить
            </button>
        </form>
    )
}

const mapStateToProps = (state) => {
    const { contactList, id } = state.contacts;
    for (let contact of contactList) {
        if (contact.id === id) {
            return contact
        }
    }
}

export default connect(mapStateToProps, { clearContactItem, updateContact })(EditForm);