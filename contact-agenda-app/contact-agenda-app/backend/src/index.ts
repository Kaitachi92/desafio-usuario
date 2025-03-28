import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contactRoutes';
import { connectToDatabase } from './utils/db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Routes
app.use('/api/contacts', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});