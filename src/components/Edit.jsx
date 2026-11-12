import { useState } from "react";
import { GeneralInfoForm } from "./EditGeneral";

export function Edit({ info, save }) {
  const [infoReplica, setInfoReplica] = useState(info);
  //const [educationReplica, setEducationReplica] = useState(education);

  function handleChangeInfo(e) {
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
        <GeneralInfoForm info={infoReplica} handleChange={handleChangeInfo} />
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
