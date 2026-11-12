export function GeneralInfoForm({ info, handleChange }) {
  return (
    <section>
      <h3>Personal information</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={info.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={info.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="phone"
          value={info.phone}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}
