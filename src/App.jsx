import { useState } from "react";
import { Edit } from "./components/Edit";
import { View } from "./components/View";

export function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    course: "",
    courseFinishedOn: "",
  });
  const [isEdit, setIsEdit] = useState(true);

  function handleSubmit(data) {
    setInfo(data);
    toggleEditMode();
  }

  function toggleEditMode() {
    setIsEdit(!isEdit);
  }

  if (isEdit) {
    return <Edit info={info} save={handleSubmit} />;
  }
  return <View info={info} editMode={toggleEditMode} />;
}
