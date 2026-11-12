import "../styles/view.css";

export function View({ info, editMode }) {
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
      </section>
    </div>
  );
}
