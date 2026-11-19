export function EditExperiences({ experiences, add, update, remove }) {
  function handleChange(id, event) {
    update(id, {
      [event.target.name]: event.target.value,
    });
  }

  return (
    <section>
      <div className="display-inline">
        <h3>Experiences</h3>
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
        const widgetCompanyId = "company_" + record.id;
        const widgetStartDateId = "startDate_" + record.id;
        const widgetEndDateId = "endDate_" + record.id;
        const widgetAboutId = "about_" + record.id;
        return (
          <div>
            <div>
              <label htmlFor={widgetCompanyId}></label>
              <input
                id={widgetCompanyId}
                name="school"
                type="text"
                onChange={(event) => handleChange(record.id, event)}
                value={record.school}
              />
            </div>
            <div>
              <label htmlFor={widgetStartDateId}></label>
              <input
                id={widgetStartDateId}
                name="startDate"
                type="date"
                onChange={(event) => handleChange(record.id, event)}
                value={record.startDate}
              />
            </div>
            <div>
              <label htmlFor={widgetEndDateId}></label>
              <input
                id={widgetEndDateId}
                name="endDate"
                type="date"
                onChange={(event) => handleChange(record.id, event)}
                value={record.endDate}
              />
            </div>
            <div>
              <label htmlFor={widgetAboutId}></label>
              <input
                id={widgetAboutId}
                name="about"
                type="textarea"
                onChange={(event) => handleChange(record.id, event)}
                value={record.about}
              />
            </div>
            <button onClick={() => remove(record.id)}></button>
          </div>
        );
      })}
    </section>
  );
}
