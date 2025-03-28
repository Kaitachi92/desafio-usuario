import { Contact } from '../models/contactModel';

export const validateContact = (contact: Contact): string[] => {
    const errors: string[] = [];

    if (!contact.name || contact.name.trim() === '') {
        errors.push('O nome é obrigatório.');
    }

    if (!contact.phone || contact.phone.trim() === '') {
        errors.push('O telefone é obrigatório.');
    } else if (!/^\d{10,15}$/.test(contact.phone)) {
        errors.push('O telefone deve conter entre 10 a 15 dígitos.');
    }

    if (!contact.email || contact.email.trim() === '') {
        errors.push('O e-mail é obrigatório.');
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
        errors.push('O e-mail deve ser válido.');
    }

    if (!contact.address || contact.address.trim() === '') {
        errors.push('O endereço é obrigatório.');
    }

    return errors;
};