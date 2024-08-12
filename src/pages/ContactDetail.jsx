import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import db from '../db';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const contactRef = doc(db, 'contacts', id);
      const contactDoc = await getDoc(contactRef);
      if (contactDoc.exists()) {
        setContact({ id: contactDoc.id, ...contactDoc.data() });
      }
    };

    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'contacts', id));
    navigate('/');
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>Email: {contact.email}</p>
      <button onClick={handleDelete}>Delete Contact</button>
      <Link to={`/edit/${contact.id}`}>Edit Contact</Link>
    </div>
  );
};

export default ContactDetail;