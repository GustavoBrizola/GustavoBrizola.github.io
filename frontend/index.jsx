import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '/api';

const App = () => 
{
  const [verifyMessage, setVerifyMessage] = useState('Waiting for backend verification...');
  const [dataMessage, setDataMessage] = useState('No backend data loaded yet.');
  const [echoMessage, setEchoMessage] = useState('No echo response received yet.');
  const [error, setError] = useState(null);

  useEffect(() => 
  {
    async function initialize() 
    {
      try 
      {
        // Those three are trying to find the messages from backend
        // const is telling where the data is
        // Very
        const verifyResponse = await axios.get('request/verify');
        setVerifyMessage(`${verifyResponse.data.status}: ${verifyResponse.data.message}`);

        const dataResponse = await axios.get('request/data');
        setDataMessage(`${dataResponse.data.message} (${dataResponse.data.timestamp})`);

        const echoResponse = await axios.post('request/echo', 
        {
          message: 'Hello from React frontend',
          timestamp: new Date().toISOString(),
        });
        setEchoMessage(JSON.stringify(echoResponse.data, null, 2));
      } 
      catch (err) 
      {
        // @ts-ignore
        setError(err.message || 'Unknown error when connecting to backend');
      }
    }

    initialize();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 820, margin: '48px auto', padding: '24px' }}>
      <h1>Frontend & Backend Connection</h1>
      <section style={{ marginBottom: 24 }}>
        <h2>Backend Verification</h2>
        <p>{verifyMessage}</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Backend Data Response</h2>
        <p>{dataMessage}</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Echo Response</h2>
        <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 8 }}>{echoMessage}</pre>
      </section>

      {error && (
        <section style={{ color: 'crimson', marginTop: 24 }}>
          <h2>Error</h2>
          <p>{error}</p>
          <p>Confirm the backend is running on <code>http://localhost:8080</code> and the frontend dev server is running on <code>http://localhost:5173</code>.</p>
        </section>
      )}
    </div>
  );
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);