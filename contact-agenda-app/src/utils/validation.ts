export const validateContactForm = (contact) => {
    const errors = {};

    if (!contact.name || contact.name.trim() === '') {
        errors.name = 'Nome é obrigatório.';
    }

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!contact.phone || !phoneRegex.test(contact.phone)) {
        errors.phone = 'Telefone deve estar no formato (XX) XXXXX-XXXX.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contact.email || !emailRegex.test(contact.email)) {
        errors.email = 'E-mail inválido.';
    }

    if (!contact.zipCode || contact.zipCode.trim() === '') {
        errors.zipCode = 'CEP é obrigatório.';
    }

    if (!contact.state || contact.state.trim() === '') {
        errors.state = 'Estado é obrigatório.';
    }

    if (!contact.city || contact.city.trim() === '') {
        errors.city = 'Cidade é obrigatória.';
    }

    if (!contact.neighborhood || contact.neighborhood.trim() === '') {
        errors.neighborhood = 'Bairro é obrigatório.';
    }

    if (!contact.street || contact.street.trim() === '') {
        errors.street = 'Rua é obrigatória.';
    }

    if (!contact.number || contact.number.trim() === '') {
        errors.number = 'Número é obrigatório.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};