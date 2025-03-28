import { Contact } from '../models/contactModel';

class ContactService {
    async createContact(contactData: Contact): Promise<Contact> {
        // Lógica para criar um novo contato
        // Validar os dados do contato
        // Interagir com o modelo para salvar no banco de dados
    }

    async getContacts(): Promise<Contact[]> {
        // Lógica para obter todos os contatos
        // Interagir com o modelo para buscar no banco de dados
    }

    async updateContact(id: number, contactData: Partial<Contact>): Promise<Contact | null> {
        // Lógica para atualizar um contato existente
        // Validar os dados do contato
        // Interagir com o modelo para atualizar no banco de dados
    }

    async deleteContact(id: number): Promise<boolean> {
        // Lógica para excluir um contato
        // Interagir com o modelo para remover do banco de dados
    }
}

export default new ContactService();