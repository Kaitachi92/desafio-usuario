import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const contactData = {
            name,
            phone,
            email,
            address,
        };

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                // Clear the form
                setName('');
                setPhone('');
                setEmail('');
                setAddress('');
                alert('Contato cadastrado com sucesso!');
            } else {
                alert('Erro ao cadastrar contato.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erro ao cadastrar contato.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="phone">Telefone:</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="address">Endereço:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Cadastrar Contato</button>
        </form>
    );
};

export default ContactForm;