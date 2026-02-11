import { useState } from "react";
import "../styles/form.css";

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

  const [formOne, setFormOne] = useState(true);
  const [formTwo, setFormTwo] = useState(true);
  const [formThree, setFormThree] = useState(true);

  const [index, setIndex] = useState(0);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (index === 0) {
      setFormOne(false);
    }
    if (index === 1) {
      setFormTwo(false);
    }

    if (index === 2) {
      setFormThree(false);
    }

    setFormData({ ...userInput });
  };

  return (
    <aside className="forms">
      <h1>CV Info</h1>
      {index === 0 && !formOne && (
        <div className="edit-align">
          <h2>General</h2>
          <p>Name: {userInput.name}</p>
          <p>Email: {userInput.email}</p>
          <p>Phone Number: {userInput.phone}</p>
          <button onClick={() => setFormOne(true)}>Edit</button>
        </div>
      )}

      {index === 0 && formOne && (
        <div className="form-align">
          <h2>Personal</h2>
          <form onSubmit={handleSubmit} className="form-data">
            <label for="name">Name </label>
            <input
              value={userInput.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="John Smith"
              required
            />
            <label for="email">Email </label>
            <input
              value={userInput.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="john@mail.com"
              required
            />
            <label for="phone">Phone Number </label>
            <input
              value={userInput.phone}
              name="phone"
              onChange={handleChange}
              type="tel"
              placeholder="111-111-1111"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {index === 1 && !formTwo && (
        <div className="edit-align">
          <h2>Education</h2>
          <p>University: {userInput.school}</p>
          <p>Major: {userInput.major}</p>
          <p>Start Date: {userInput.startDate}</p>
          <p>End Date: {userInput.endDate}</p>
          <button onClick={() => setFormTwo(true)}>Edit</button>
        </div>
      )}

      {index === 1 && formTwo && (
        <div className="form-align">
          <h2>Education</h2>
          <label for="school">University: </label>
          <form className="form-data" onSubmit={handleSubmit}>
            <input
              value={userInput.school}
              name="school"
              onChange={handleChange}
              type="text"
              placeholder="UGA"
              required
            />
            <label for="major">Major: </label>
            <input
              value={userInput.major}
              name="major"
              onChange={handleChange}
              type="text"
              placeholder="Computer Science"
              required
            />
            <label for="startDate">Start Date: </label>
            <input
              value={userInput.startDate}
              name="startDate"
              onChange={handleChange}
              type="date"
              placeholder="12-03-2019"
              required
            />
            <label for="endDate">End Date: </label>
            <input
              value={userInput.endDate}
              name="endDate"
              onChange={handleChange}
              type="date"
              placeholder="12-03-2018"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {index === 2 && !formThree && (
        <div className="edit-align">
          <h2>Professional</h2>
          <p>Company: {userInput.company}</p>
          <p>Position: {userInput.position}</p>
          <p>Responsibilities: {userInput.responsibility}</p>
          <p>Start Date: {userInput.startJob}</p>
          <p>End Date: {userInput.endJob}</p>
          <button onClick={() => setFormThree(true)}>Edit</button>
        </div>
      )}

      {index === 2 && formThree && (
        <div className="form-align">
          <h2>Pratical</h2>
          <form className="form-data" onSubmit={handleSubmit}>
            <label for="company">Company: </label>
            <input
              value={userInput.company}
              name="company"
              onChange={handleChange}
              type="text"
              placeholder="RaceTrac"
              required
            />
            <label for="position">Position: </label>
            <input
              value={userInput.position}
              name="position"
              onChange={handleChange}
              type="text"
              placeholder="Manager"
              required
            />
            <label for="responsibility">Responsibilities: </label>
            <input
              value={userInput.responsibility}
              name="responsibility"
              onChange={handleChange}
              type="text"
              placeholder="Worked forklift"
              required
            />
            <label for="startJob">Start Date: </label>
            <input
              value={userInput.startJob}
              name="startJob"
              onChange={handleChange}
              type="date"
              placeholder="12-03-2018"
              required
            />
            <label for="endJob">End Date: </label>
            <input
              value={userInput.endJob}
              name="endJob"
              onChange={handleChange}
              type="date"
              placeholder="12-03-2019"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <div className="switch">
        <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Previous
        </button>
        <button onClick={() => setIndex(index + 1)} disabled={index === 2}>
          Next
        </button>
      </div>
    </aside>
  );
}
