export function GeneralInfoForm({ education, handleChange }) {
  return (
    <section>
      <h3>Education</h3>
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
