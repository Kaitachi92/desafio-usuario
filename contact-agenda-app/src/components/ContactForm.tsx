import React, { useState } from 'react';
import { validateContact } from '../utils/validation';
import { fetchAddress } from '../services/viaCepService';

const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { name, phone, email, cep, state, city, neighborhood, street, number, complement };
        const validationError = validateContact(contact);
        
        if (validationError) {
            setError(validationError);
            return;
        }

        onAddContact(contact);
        clearForm();
    };

    const clearForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setCep('');
        setState('');
        setCity('');
        setNeighborhood('');
        setStreet('');
        setNumber('');
        setComplement('');
        setError('');
    };

    const handleCepBlur = async () => {
        if (cep.length === 8) {
            const address = await fetchAddress(cep);
            if (address) {
                setState(address.uf);
                setCity(address.localidade);
                setNeighborhood(address.bairro);
                setStreet(address.logradouro);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastro de Contato</h2>
            {error && <p className="error">{error}</p>}
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={handleCepBlur} required />
            <input type="text" placeholder="Estado" value={state} onChange={(e) => setState(e.target.value)} required />
            <input type="text" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} required />
            <input type="text" placeholder="Bairro" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} required />
            <input type="text" placeholder="Rua" value={street} onChange={(e) => setStreet(e.target.value)} required />
            <input type="text" placeholder="Número" value={number} onChange={(e) => setNumber(e.target.value)} required />
            <input type="text" placeholder="Complemento" value={complement} onChange={(e) => setComplement(e.target.value)} />
            <button type="submit">Adicionar Contato</button>
        </form>
    );
};

export default ContactForm;