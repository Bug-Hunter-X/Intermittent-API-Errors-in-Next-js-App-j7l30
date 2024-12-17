```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await res.json();
      setData(jsonData);
    };

    fetchData().catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Data from API:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// pages/api/data.js
export default async function handler(req, res) {
  // Simulate an API call that might occasionally fail
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(200).json({ message: 'Data from API' });
  }
}
```