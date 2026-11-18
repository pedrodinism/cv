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

  const [isEdit, setIsEdit] = useState(true);

  function handleSubmit(generalInfo, educationInfo) {
    setInfo(generalInfo);
    setEducation(educationInfo);
    toggleEditMode();
  }

  function toggleEditMode() {
    setIsEdit(!isEdit);
  }

  if (isEdit) {
    return <Edit info={info} education={education} save={handleSubmit} />;
  }
  return <View info={info} education={education} editMode={toggleEditMode} />;
}
