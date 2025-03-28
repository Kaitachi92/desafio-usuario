import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const editContact = (updatedContact) => {
        const updatedContacts = contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        );
        setContacts(updatedContacts);
    };

    const deleteContact = (id) => {
        const filteredContacts = contacts.filter(contact => contact.id !== id);
        setContacts(filteredContacts);
    };

    return (
        <div className="app">
            <h1>Agenda de Contatos</h1>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
        </div>
    );
};

export default App;