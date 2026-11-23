import { useState } from "react";
import { Edit } from "./components/Edit";
import { View } from "./components/View";

export function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [isEdit, setIsEdit] = useState(true);

  function handleSubmit(generalInfo, educationInfo, experiencesInfo) {
    setInfo(generalInfo);
    setEducation(educationInfo);
    setExperiences(experiencesInfo);
    toggleEditMode();
  }

  function toggleEditMode() {
    setIsEdit(!isEdit);
  }

  if (isEdit) {
    return (
      <Edit
        info={info}
        education={education}
        save={handleSubmit}
        experiences={experiences}
      />
    );
  }
  return (
    <View
      info={info}
      education={education}
      experiences={experiences}
      editMode={toggleEditMode}
    />
  );
}
