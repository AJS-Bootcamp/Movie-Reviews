import React, { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import styles from './Login.module.css';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email || !pass) {
        throw new Error('All fields are required.');
      }

      if (pass.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
      }

      const response = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: pass,
        }),
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className={styles['auth-form-container']}>
      <h2>Register</h2>
      <form className={styles['register-form']} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FaUserAlt className={styles.icon} />
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
          />
        </div>

        <div className={styles.inputGroup}>
          <HiOutlineMail className={styles.icon} />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
        </div>

        <div className={styles.inputGroup}>
          <RiLockPasswordLine className={styles.icon} />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <button type="submit">Register</button>
      </form>

      <button className={styles['link-btn']} onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
