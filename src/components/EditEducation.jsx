export function EducationForm({ education, add, update, remove }) {
  function handleChange(event, id) {
    update(id, {
      [event.target.name]: event.target.value,
    });
  }
  return (
    <section>
      <div className="display-inline">
        <h3>Education</h3>
        <button
          className="margin-left-base"
          onClick={(event) => {
            event.preventDefault();
            return add();
          }}
        >
          Add +
        </button>
      </div>
      {education.map((record) => {
        const widgetSchoolId = "school_" + record.id;
        const widgetCourseId = "course_" + record.id;
        const widgetEndDateId = "endDate_" + record.id;
        return (
          <div className="education-row-edit" key={record.id}>
            <div>
              <label htmlFor={widgetSchoolId}>School</label>
              <input
                id={widgetSchoolId}
                name="school"
                type="text"
                onChange={(event) => handleChange(event, record.id)}
                value={record.school}
              />
            </div>
            <div>
              <label htmlFor={widgetCourseId}>Course</label>
              <input
                id={widgetCourseId}
                name="course"
                type="text"
                value={record.course}
                onChange={(event) => handleChange(event, record.id)}
              />
            </div>
            <div>
              <label htmlFor={widgetEndDateId}>End Date</label>
              <input
                id={widgetEndDateId}
                name="endDate"
                type="text"
                value={record.endDate}
                onChange={(event) => handleChange(event, record.id)}
              />
            </div>
            <button onClick={() => remove(record.id)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
}
