export function Edit({ info, callback }) {
  return (
    <section className="edit">
      <h3>Personal information</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={info.name} onChange={callback} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={info.email} onChange={callback} />
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input id="phone" type="phone" value={info.phone} onChange={callback} />
      </div>
    </section>
  );
}
