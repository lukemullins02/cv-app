import { useState } from "react";
import Form from "./components/form";
import Display from "./components/Display";

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
    <>
      <Form setFormData={setFormData} />
      <Display formData={formData} />
    </>
  );
}
