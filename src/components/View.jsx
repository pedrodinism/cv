import "../styles/view.css";

export function View({ info, education, editMode }) {
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
        <div className="generalInfo">
          <div className="school">{info.school}</div>
          <div className="course">{info.course}</div>
          <div className="courseFinishedOn">{info.courseFinishedOn}</div>
        </div>
        <div className="generalInfo">
          <h3>Education</h3>
          {education.map((record) => {
            return (
              <div className="education-row">
                <div>School: {record.school}</div>
                <div>Course: {record.course}</div>
                <div>End Date: {record.endDate}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
