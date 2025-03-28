import { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { Contact } from '../types/contact';

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    const response = await fetch('/api/contacts');
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Agenda de Contatos</h1>
      <ContactForm onContactAdded={fetchContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;