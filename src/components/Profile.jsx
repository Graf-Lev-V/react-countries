import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Profile() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
  });
  const [error, setError] = useState({});

  useEffect(() => {
    if (!data) return;
    //eslint-disable-next-line
    setForm({
      name: data.name,
      email: data.email,
      phone: data.phone,
      username: data.username,
    });
  }, [data]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = 'Fill Field';
        return;
      }
      if (key === 'email' && !value.includes('@'))
        newErrors[key] = 'Fill Email Correctly!';
    });
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted');
      return;
    }
    setError(newErrors);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && <p>{error.name}</p>}
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        {error.phone && <p>{error.phone}</p>}
      </div>
      <div>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        {error.username && <p>{error.username}</p>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
