import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function App() {
  const [health, setHealth] = useState({ loading: true, data: null, error: null });
  const [message, setMessage] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    async function loadBackendData() {
      try {
        const [healthResponse, messageResponse] = await Promise.all([
          fetch(`${apiUrl}/api/health`),
          fetch(`${apiUrl}/api/message`)
        ]);

        if (!healthResponse.ok) {
          throw new Error(`Health request failed with ${healthResponse.status}`);
        }

        if (!messageResponse.ok) {
          throw new Error(`Message request failed with ${messageResponse.status}`);
        }

        const [healthData, messageData] = await Promise.all([
          healthResponse.json(),
          messageResponse.json()
        ]);

        setHealth({ loading: false, data: healthData, error: null });
        setMessage({ loading: false, data: messageData, error: null });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown API error';
        setHealth({ loading: false, data: null, error: errorMessage });
        setMessage({ loading: false, data: null, error: errorMessage });
      }
    }

    loadBackendData();
  }, []);

  return (
    <main className="app-shell">
      <section className="status-panel">
        <p className="eyebrow">EasyFlow App</p>
        <h1>React frontend connected to Node.js API</h1>

        <div className="status-grid">
          <article className="status-card">
            <span className="label">Backend health</span>
            <strong className={health.data?.status === 'ok' ? 'status-ok' : 'status-pending'}>
              {health.loading ? 'Loading...' : health.error || health.data?.status}
            </strong>
            {health.data?.service && <p>{health.data.service}</p>}
          </article>

          <article className="status-card">
            <span className="label">Message</span>
            <strong>{message.loading ? 'Loading...' : message.error || message.data?.message}</strong>
            <p>API base URL: {apiUrl}</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;

