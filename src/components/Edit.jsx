import { useState } from "react";
import { GeneralInfoForm } from "./EditGeneral";
import { EducationForm } from "./EditEducation";
import "../styles/edit.css";
import { ExperiencesForm } from "./EditExperiences";

export function Edit({ info, save, education, experiences }) {
  const [editInfo, setEditInfo] = useState(info);
  const [editEducation, setEditEducation] = useState(education);
  const [editExperiences, setEditExperiences] = useState(experiences);

  function handleChangeInfo(e) {
    const name = e.target.id;
    const value = e.target.value;
    setEditInfo({ ...editInfo, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    save(editInfo, editEducation, editExperiences);
  }

  function add(set, record) {
    set((prev) => [...prev, record]);
  }

  function deleteRecord(set, id) {
    set((prev) => prev.filter((record) => record.id !== id));
  }

  function getId(list) {
    let max = 0;
    for (let record of list) {
      if (record.id > max) {
        max = record.id;
      }
    }
    return max + 1;
  }

  function update(id, updatedRecord, setEdit) {
    setEdit((prev) =>
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
          add={() =>
            add(setEditEducation, {
              id: getId(editEducation),
              school: "",
              course: "",
              endDate: "",
            })
          }
          update={(id, record) => update(id, record, setEditEducation)}
          remove={(id) => deleteRecord(setEditEducation, id)}
        />
        <ExperiencesForm
          experiences={editExperiences}
          add={() =>
            add(setEditExperiences, {
              id: getId(editExperiences),
              company: "",
              startDate: "",
              endDate: "",
              about: "",
            })
          }
          update={(id, record) => update(id, record, setEditExperiences)}
          remove={(id) => deleteRecord(setEditExperiences, id)}
        />
        <div className="text-align-right">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}
