export function EditExperiences({ experiences, add, update, remove }) {
  function handleChange(id, event) {
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
      {experiences.map((record) => {
        return (
          <div>
            <label htmlFor="company"></label>
            <input
              id="company"
              type="text"
              onChange={(event) => handleChange(record.id, event)}
              value={record.company}
            />
          </div>
        );
      })}
    </section>
  );
}
