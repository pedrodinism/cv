import { useState } from "react";
import { GeneralInfoForm } from "./EditGeneral";

export function Edit({ info, save, education }) {
  const [editInfo, setEditInfo] = useState(info);
  const [editEducation, setEditEducation] = useState(education);

  function handleChangeInfo(e) {
    const name = e.target.id;
    const value = e.target.value;
    setEditInfo({ ...editInfo, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    save(editInfo);
  }

  return (
    <section className="edit">
      <form onSubmit={handleSubmit}>
        <GeneralInfoForm info={editInfo} handleChange={handleChangeInfo} />

        <button type="submit">Save</button>
      </form>
    </section>
  );
}
