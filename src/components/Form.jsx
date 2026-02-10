import { useState } from "react";

export default function Form({ setFormData }) {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...userInput });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput.name}
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="John Smith"
      />
      <input
        value={userInput.email}
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="john@mail.com"
      />
      <input
        value={userInput.phone}
        name="phone"
        onChange={handleChange}
        type="tel"
        placeholder="111-111-1111"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
