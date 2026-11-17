import "../styles/view.css";

export function View({ info, education, editMode }) {
  return (
    <div>
      <div className="actions" onClick={editMode}>
        Edit
      </div>
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
          Education goes here
          {education.map((record) => {
            return (
              <div>
                <div className="school">{record.school}</div>
                <div className="course">{record.course}</div>
                <div className="courseFinishedOn">
                  {record.courseFinishedOn}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
