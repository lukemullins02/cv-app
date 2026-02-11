import "../styles/display.css";

export default function Display({ formData }) {
  return (
    <div className="cv-bg">
      <div className="cv" id="cv">
        <h1>CV</h1>
        <div className="personal">
          <h2>Personal Information</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phone}</p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>University: {formData.school}</p>
          <p>Degree: {formData.major}</p>
          <p>Start Date: {formData.startDate}</p>
          <p>End Date: {formData.endDate}</p>
        </div>
        <div className="professional">
          <h2>Professional Experience</h2>
          <p>Company: {formData.company}</p>
          <p>Position: {formData.position}</p>
          <p>Responsibilities: {formData.responsibility}</p>
          <p>Start Date: {formData.startJob}</p>
          <p>End Date: {formData.endJob}</p>
        </div>
      </div>
    </div>
  );
}
