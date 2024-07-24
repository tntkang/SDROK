import React, { useState } from 'react'; // useEffect 제거
import axios from 'axios';

function Dashboard() {
    const [apiKey, setApiKey] = useState('');

    const createApiKey = async () => {
        try {
            const response = await axios.post('/api/keys', {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setApiKey(response.data.key);
        } catch (error) {
            console.error('Error creating API key', error);
        }
    };

    return (
        <div>
            <h2>API Key Management Dashboard</h2>
            <button onClick={createApiKey}>Create API Key</button>
            {apiKey && (
                <div>
                    <h3>Your API Key</h3>
                    <p>{apiKey}</p>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
