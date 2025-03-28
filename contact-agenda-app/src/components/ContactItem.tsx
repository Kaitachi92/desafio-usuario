import React from 'react';

interface ContactItemProps {
    contact: {
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
    };
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onDelete }) => {
    return (
        <div className="contact-item">
            <h3>{contact.name}</h3>
            <p>Telefone: {contact.phone}</p>
            <p>E-mail: {contact.email}</p>
            <p>Endereço: {contact.address.street}, {contact.address.number} - {contact.address.neighborhood}, {contact.address.city} - {contact.address.state}, {contact.address.cep}</p>
            <button onClick={() => onEdit(contact.id)}>Editar</button>
            <button onClick={() => onDelete(contact.id)}>Excluir</button>
        </div>
    );
};

export default ContactItem;