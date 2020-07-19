import React from 'react';
import './contact-item.css';
import { connect } from 'react-redux';
import { uploadContactItem, deleteContact } from '../../redux/actions';

const ContactItem = props => {
    const { id, name, email, phone, contact_type, uploadContactItem, deleteContact } = props;

    const handleEditButtonClick = () => {
        uploadContactItem(id)
    }
    return (
        <li className="contact-item">
            <div className="contact-item__upper-wrapper">
                <span className="contact-item__name">{name}</span>
                <span className="contact-item__contact-type">{contact_type}</span>
            </div>
            <div className="contact-item__wrapper">
                <i className="fa fa-envelope-open" aria-hidden="true"></i>
                {email}
            </div>
            <div>
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                {phone}
            </div>
            <button onClick={handleEditButtonClick}>Редактировать</button>
            <button onClick={() => { deleteContact(id) }}>Удалить</button>
        </li>
    )
}

export default connect(null, { uploadContactItem, deleteContact })(ContactItem);
