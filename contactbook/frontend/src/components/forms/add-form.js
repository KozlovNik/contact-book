import React, { useState } from 'react';
import "./forms.css";
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions';

const inputFields = {
    name: '',
    email: '',
    phone: '',
    contact_type: 'личный'
}

const AddForm = ({ addContact }) => {
    const [inputs, setInputs] = useState({ ...inputFields })
    const handleFormSubmit = e => {
        e.preventDefault();
        addContact(inputs);
        setInputs({ ...inputFields })
    }
    const handleInputChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form
            className="home-page__el home-page-form"
            onSubmit={handleFormSubmit}>
            <h2 className="home-page-form__heading">Добавить контакт</h2>
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
                placeholder="Номер телефона" name="phone"
                onChange={handleInputChange} />
            <h3>Тип контакта</h3>
            <label className="home-page-form__label">
                Личный
                    <input
                    type="radio" name="contact_type" value="личный"
                    checked={inputs.contact_type === 'личный'}
                    onChange={handleInputChange} />
            </label>
            <label>Рабочий
                    <input
                    type="radio" name="contact_type"
                    checked={inputs.contact_type === 'рабочий'}
                    value="рабочий" onChange={handleInputChange} />
            </label>
            <button>Добавить контакт</button>
        </form>
    )
}

export default connect(null, { addContact })(AddForm);