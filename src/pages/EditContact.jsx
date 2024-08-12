import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import db from '../db';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const EditContact = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const contactRef = doc(db, 'contacts', id);
      const contactDoc = await getDoc(contactRef);
      if (contactDoc.exists()) {
        const contact = contactDoc.data();
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setEmail(contact.email);
      }
    };

    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactRef = doc(db, 'contacts', id);
    await updateDoc(contactRef, { firstName, lastName, email });
    navigate(`/contact/${id}`);
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;