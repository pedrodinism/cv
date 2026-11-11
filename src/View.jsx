export function View({ info }) {
  return (
    <section className="view">
      <div>Name: {info.name}</div>
      <div>Email: {info.email}</div>
      <div>Phone number: {info.phone}</div>
    </section>
  );
}
