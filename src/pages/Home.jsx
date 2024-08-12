import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../db';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      contactsList.sort((a, b) => a.lastName.localeCompare(b.lastName));
      setContacts(contactsList);
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact Book</h1>
      <input type="text" placeholder="Search contacts..." />
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.lastName}, {contact.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;