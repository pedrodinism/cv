export function FormField({ id, value, label, onChange, type = "text" }) {
  const widgetId = label + "_" + id;
  return (
    <div>
      <label htmlFor={widgetId}>{label}</label>
      <input
        id={widgetId}
        name="name"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
