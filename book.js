import { useState } from 'react';
import axios from 'axios';

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', dates: '', preferences: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const res = await axios.post('/api/ai-match', form);
    setResponse(res.data);
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
      {['name', 'email', 'dates', 'preferences'].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          className="block w-full mb-3 p-2 border"
          onChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Find Match</button>
      {response && (
        <div className="mt-6 p-4 bg-green-100">
          <h3 className="font-semibold">AI Recommendation:</h3>
          <p>{response.match}</p>
        </div>
      )}
    </div>
  );
}
