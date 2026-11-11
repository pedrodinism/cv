export function View({ info }) {
  return (
    <section className="view">
      <div className="generalInfo">
        <div className="name">{info.name}</div>
        <div className="contact">
          <span>{info.email}</span>
          <span>{info.phone}</span>
        </div>
      </div>
    </section>
  );
}
