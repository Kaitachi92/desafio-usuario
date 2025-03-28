import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import apiService from '../services/apiService';

const ContactList: React.FC = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await apiService.getContacts();
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div>
            <h2>Lista de Contatos</h2>
            <ul>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;