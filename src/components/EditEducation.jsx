export function EducationForm({ education, add, update, remove }) {
  function handleChange(event, id) {
    update(id, {
      [event.target.id]: event.target.value,
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
        return (
          <div className="education-row-edit" key={record.id}>
            <div>
              <label htmlFor="school">School</label>
              <input
                id="school"
                data-id={record.id}
                type="text"
                onChange={(event) => handleChange(event, record.id)}
                value={record.school}
              />
            </div>
            <div>
              <label htmlFor="course">Course</label>
              <input
                id="course"
                type="text"
                value={record.course}
                onChange={(event) => handleChange(event, record.id)}
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                type="text"
                value={record.endDate}
                onChange={(event) => handleChange(event, record.id)}
              />
            </div>
            <button
              onClick={() => {
                remove(record.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
}
