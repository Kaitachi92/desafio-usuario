import { Request, Response } from 'express';
import ContactService from '../services/contactService';

class ContactController {
    async createContact(req: Request, res: Response) {
        try {
            const contactData = req.body;
            const newContact = await ContactService.createContact(contactData);
            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ message: 'Error creating contact', error });
        }
    }

    async getContacts(req: Request, res: Response) {
        try {
            const contacts = await ContactService.getContacts();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contacts', error });
        }
    }

    async updateContact(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const contactData = req.body;
            const updatedContact = await ContactService.updateContact(id, contactData);
            res.status(200).json(updatedContact);
        } catch (error) {
            res.status(500).json({ message: 'Error updating contact', error });
        }
    }

    async deleteContact(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await ContactService.deleteContact(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting contact', error });
        }
    }
}

export default new ContactController();