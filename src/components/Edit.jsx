import { useState } from "react";
import { GeneralInfoForm } from "./EditGeneral";
import { EducationForm } from "./EditEducation";
import "../styles/edit.css";

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
    save(editInfo, editEducation);
  }

  function addEducation() {
    setEditEducation((prev) => [
      ...prev,
      {
        id: getId(),
        school: "",
        course: "",
        endDate: "",
      },
    ]);
  }

  function deleteEducation(id) {
    setEditEducation((prev) => prev.filter((record) => record.id !== id));
  }

  function getId() {
    let max = 0;
    for (let record of editEducation) {
      if (record.id > max) {
        max = record.id;
      }
    }
    return max + 1;
  }

  function updateEducation(id, updatedRecord) {
    setEditEducation((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, ...updatedRecord } : record,
      ),
    );
  }

  return (
    <section className="edit">
      <form onSubmit={handleSubmit}>
        <GeneralInfoForm info={editInfo} handleChange={handleChangeInfo} />
        <EducationForm
          education={editEducation}
          add={addEducation}
          update={updateEducation}
          remove={deleteEducation}
        />
        <div className="text-align-right">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}
