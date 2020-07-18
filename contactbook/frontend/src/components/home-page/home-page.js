import React, { useEffect } from 'react';
import "./home-page.css";
import { connect } from 'react-redux';
import { getContacts, addContact } from '../../redux/actions';
import ContactItem from '../contact-item/contact-item';
import AddForm from '../forms/add-form';
import EditForm from '../forms/edit-form';

const HomePage = ({ getContacts, contacts, showEdit, isAuthenticated }) => {
    useEffect(() => {
        if (isAuthenticated) {
            getContacts()
        }
    }, [getContacts, isAuthenticated])

    return (
        <div className="home-page">
            {showEdit ? <EditForm /> : <AddForm />}
            <div className="home-page__el">
                <input
                    placeholder="Фильтр"
                    className="home-page-form__input" />
                <div>У вас пока нет добавленных контактов</div>
                {
                    <ul className="contact-list">
                        {contacts.map(item =>
                            <ContactItem key={item.id} {...item} />)}
                    </ul>
                }

            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contactList,
        showEdit: state.contacts.showEdit,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { getContacts, addContact })(HomePage);