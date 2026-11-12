import { randomUUID } from "crypto";
import { useState } from "react";

export function EducationForm({ education, handleChange }) {
  const [educationForm, setEducationForm] = useState(education);

  const addEducation = () => {
    setEducationForm((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        school: "",
        course: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  return (
    <section>
      <h3>Education</h3>
      {education}
      <div>
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          value={education.school}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="course">Course</label>
        <input
          id="course"
          type="text"
          value={education.course}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="courseFinishedOn">Finished on</label>
        <input
          id="courseFinishedOn"
          type="date"
          value={education.courseFinishedOn}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}
