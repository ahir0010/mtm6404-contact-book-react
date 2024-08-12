import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../db';
import { collection, addDoc } from 'firebase/firestore';

const NewContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'contacts'), {
      firstName,
      lastName,
      email
    });
    navigate(`/contact/${docRef.id}`);
  };

  return (
    <div>
      <h1>New Contact</h1>
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
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default NewContact;