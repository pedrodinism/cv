import { useState } from "react";

export function Edit({ info, save }) {
  const [infoReplica, setInfoReplica] = useState(info);

  function handleChange(e) {
    const name = e.target.id;
    const value = e.target.value;
    setInfoReplica({ ...infoReplica, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    save(infoReplica);
  }

  return (
    <section className="edit">
      <form onSubmit={handleSubmit}>
        <h3>Personal information</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={infoReplica.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={infoReplica.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="phone"
            value={infoReplica.phone}
            onChange={handleChange}
          />
        </div>
        <h3>Education</h3>
        <div>
          <label htmlFor="school">School</label>
          <input
            id="school"
            type="text"
            value={infoReplica.school}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            value={infoReplica.course}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="courseFinishedOn">Finished on</label>
          <input
            id="courseFinishedOn"
            type="date"
            value={infoReplica.courseFinishedOn}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
