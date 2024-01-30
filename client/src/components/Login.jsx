import React, { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import styles from './Login.module.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await authenticateUser(email, pass);

            if (response.ok) {
                console.log('Login successful');
            } else {
                throw new Error('Invalid credentials'); // Customize error based on your API response
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);
        }
    }

    const authenticateUser = async (email, password) => {
        const url = 'http://localhost:3001/users/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        return response;
    }

    return (
        <div className={styles['auth-form-container']}>
            <h2>Login</h2>
            <form className={styles['login-form']} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <HiOutlineMail className={styles.icon} />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        className={styles.input}
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
                        className={styles.input}
                    />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit" className={styles.button}>Log In</button>
            </form>
            <button className={styles['link-btn']} onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Register here.
            </button>
        </div>
    )
}
