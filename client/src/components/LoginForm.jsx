import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginForm = () => {
  const [action, setAction] = useState('Sign up');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const url = 'http://localhost:3001/users/login';
    const formElements = event.target.elements;

    const values = {
      username: formElements.username ? formElements.username.value : '',
      email: formElements.email.value,
      password: formElements.password.value,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>
          <div className={styles.text}>{action}</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
          {action === 'Login' ? (
            <div></div>
          ) : (
            <div className={styles.input}>
              <FaRegUserCircle />
              <input type="text" name="username" placeholder="Name" />
            </div>
          )}
          <div className={styles.input}>
            <MdOutlineEmail />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className={styles.input}>
            <RiLockPasswordLine />
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        {action === 'Sign Up' ? (
          <div></div>
        ) : (
          <div className={styles['forgot-password']}>
            Forgot Password? <span>Click Here!</span>
          </div>
        )}
        <div className={styles['submit-container']}>
          <div
            className={action === 'Login' ? `${styles.submit} ${styles.gray}` : styles.submit}
            onClick={() => {
              setAction('Sign Up');
            }}
          >
            Sign Up
          </div>
          <div
            className={action === 'Sign Up' ? `${styles.submit} ${styles.gray}` : styles.submit}
            onClick={() => {
              setAction('Login');
            }}
          >
            Login
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
