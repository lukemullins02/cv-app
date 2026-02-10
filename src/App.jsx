import { useState } from "react";
import Form from "./components/form";
import Display from "./components/Display";
import "./styles/app.css";

export default function App() {
  const [formData, setFormData] = useState({
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

  return (
    <div className="view">
      <Form setFormData={setFormData} />
      <Display formData={formData} />
    </div>
  );
}
