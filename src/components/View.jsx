import "../styles/view.css";

export function View({ info, education, experiences, editMode }) {
  return (
    <div>
      <button
        className="actions"
        onClick={(event) => {
          event.preventDefault();
          editMode();
        }}
      >
        Edit
      </button>
      <section className="view">
        <div className="generalInfo">
          <div className="name">{info.name}</div>
          <div className="contact">
            <span>{info.email}</span>
            <span>{info.phone}</span>
          </div>
        </div>
        <div className="infoSection">
          <h3>Education</h3>
          {education.map((record) => {
            return (
              <div className="education-row" key={record.id}>
                <div>{record.endDate}</div>
                <div>
                  {record.school} | {record.course}
                </div>
              </div>
            );
          })}
        </div>
        <div className="infoSection">
          <h3>Experiences</h3>
          {experiences.map((record) => {
            return (
              <div className="education-row" key={record.id}>
                <div>
                  {record.startDate} to {record.endDate}
                </div>
                <div>{record.company}</div>
                <div>{record.about}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
