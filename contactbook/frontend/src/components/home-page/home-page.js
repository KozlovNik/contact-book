import React, { useEffect, useState } from 'react';
import "./home-page.css";
import { connect } from 'react-redux';
import { getContacts, addContact } from '../../redux/actions';
import ContactItem from '../contact-item/contact-item';
import AddForm from '../forms/add-form';
import EditForm from '../forms/edit-form';

const HomePage = ({ getContacts, contacts, showEdit, isAuthenticated }) => {

    const [contactFilter, setContactFilter] = useState('');
    useEffect(() => {
        if (isAuthenticated) getContacts()
    }, [getContacts, isAuthenticated])

    const handleFormFilterChange = e => {
        setContactFilter(e.target.value)
    }

    const filteredContacts = contacts.filter(el =>
        el.name.indexOf(contactFilter) >= 0)

    return (
        <div className="home-page">
            {showEdit ? <EditForm /> : <AddForm />}
            <div className="home-page__el">
                <input
                    placeholder="Фильтр"
                    className="home-page-form__input"
                    onChange={handleFormFilterChange} />
                {
                    contacts.length > 0
                        ? (
                            <ul className="contact-list">
                                {filteredContacts.map(item =>
                                    <ContactItem key={item.id} {...item} />)}
                            </ul>
                        )
                        : <div>У вас пока нет добавленных контактов</div>
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