import { Router } from 'express';
import ContactController from '../controllers/contactController';

const router = Router();
const contactController = new ContactController();

// Define as rotas para gerenciar contatos
router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

export default router;