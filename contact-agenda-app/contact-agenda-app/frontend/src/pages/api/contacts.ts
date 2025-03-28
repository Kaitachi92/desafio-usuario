import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts'; // URL do backend

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            try {
                const response = await axios.get(API_URL);
                res.status(200).json(response.data);
            } catch (error) {
                res.status(500).json({ message: 'Erro ao buscar contatos' });
            }
            break;

        case 'POST':
            try {
                const response = await axios.post(API_URL, req.body);
                res.status(201).json(response.data);
            } catch (error) {
                res.status(500).json({ message: 'Erro ao criar contato' });
            }
            break;

        case 'PUT':
            const { id } = req.query;
            try {
                const response = await axios.put(`${API_URL}/${id}`, req.body);
                res.status(200).json(response.data);
            } catch (error) {
                res.status(500).json({ message: 'Erro ao atualizar contato' });
            }
            break;

        case 'DELETE':
            const { id: deleteId } = req.query;
            try {
                await axios.delete(`${API_URL}/${deleteId}`);
                res.status(204).end();
            } catch (error) {
                res.status(500).json({ message: 'Erro ao excluir contato' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}