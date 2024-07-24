import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegister = async () => {
        try {
            await axios.post('/api/users/register', { username, password });
            history.push('/login');
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default RegisterPage;
