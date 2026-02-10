import { useState } from "react";

export default function Form({ setFormData }) {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    major: "",
    startDate: "",
    endDate: "",
    company: "",
    position: "",
    responsibility: "",
    startJob: "",
    endJob: "",
  });

  const [index, setIndex] = useState(0);

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
    <div>
      {index === 0 && (
        <div>
          <h1>General</h1>
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
        </div>
      )}

      {index === 1 && (
        <div>
          <h1>Education</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={userInput.school}
              name="school"
              onChange={handleChange}
              type="text"
              placeholder="UGA"
            />
            <input
              value={userInput.major}
              name="major"
              onChange={handleChange}
              type="text"
              placeholder="Computer Science"
            />
            <input
              value={userInput.startDate}
              name="startDate"
              onChange={handleChange}
              type="text"
              placeholder="12-03-2019"
            />
            <input
              value={userInput.endDate}
              name="startDate"
              onChange={handleChange}
              type="text"
              placeholder="12-03-2018"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {index === 2 && (
        <div>
          <h1>Pratical</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={userInput.company}
              name="school"
              onChange={handleChange}
              type="text"
              placeholder="RaceTrac"
            />
            <input
              value={userInput.position}
              name="major"
              onChange={handleChange}
              type="text"
              placeholder="Manager"
            />
            <input
              value={userInput.responsibility}
              name="startDate"
              onChange={handleChange}
              type="text"
              placeholder="Worked forklift"
            />
            <input
              value={userInput.startJob}
              name="startDate"
              onChange={handleChange}
              type="text"
              placeholder="12-03-2018"
            />
            <input
              value={userInput.endJob}
              name="startDate"
              onChange={handleChange}
              type="text"
              placeholder="12-03-2019"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
        Previous
      </button>
      <button onClick={() => setIndex(index + 1)} disabled={index === 2}>
        Next
      </button>
    </div>
  );
}
