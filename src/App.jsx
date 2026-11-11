import { useState } from "react";
import { Edit } from "./Edit";
import { View } from "./View";

export function App() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  function handleChange(e) {
    const id = e.target.id;
    switch (id) {
      case "name":
        setInfo({ ...info, name: e.target.value });
        break;
      case "email":
        setInfo({ ...info, email: e.target.value });
        break;
      case "phone":
        setInfo({ ...info, phone: e.target.value });
        break;
    }
  }

  return (
    <div className="mainContent">
      <Edit info={info} callback={handleChange} />
      <View info={info} />
    </div>
  );
}
