import React from 'react';
import ContactItem from './ContactItem';

interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: {
        cep: string;
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement: string;
    };
}

interface ContactListProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
    onDelete: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Lista de Contatos</h2>
            <ul>
                {contacts.map(contact => (
                    <ContactItem 
                        key={contact.id} 
                        contact={contact} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;