import React from 'react';

interface ContactItemProps {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ id, name, phone, email, address, onEdit, onDelete }) => {
  return (
    <div className="contact-item">
      <h3>{name}</h3>
      <p>Telefone: {phone}</p>
      <p>E-mail: {email}</p>
      <p>Endereço: {address}</p>
      <button onClick={() => onEdit(id)}>Editar</button>
      <button onClick={() => onDelete(id)}>Excluir</button>
    </div>
  );
};

export default ContactItem;