import { useState } from "react";
import Form from "./components/form";
import Display from "./components/Display";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <Display formData={formData} />
      <Form setFormData={setFormData} />
    </>
  );
}
