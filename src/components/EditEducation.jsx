export function EducationForm({ education, addEducation, updateEducation }) {
  return (
    <section>
      <h3>Education</h3>
      <div onClick={addEducation}>Add</div>
      {education.map((record) => {
        return (
          <div key={record.id}>
            <div>
              <label htmlFor="school">School</label>
              <input
                id="school"
                type="text"
                onChange={(event) =>
                  updateEducation(record.id, {
                    school: event.target.value,
                  })
                }
                value={record.school}
              />
            </div>
            <div>
              <label htmlFor="course">Course</label>
              <input id="course" type="text" value={record.course} />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input id="endDate" type="text" value={record.endDate} />
            </div>
            <div>Delete</div>
            <div className="separator">-----</div>
          </div>
        );
      })}
    </section>
  );
}
