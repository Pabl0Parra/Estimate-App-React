export default function Checkbox(props) {
  return (
    <div>
      <input
        type="checkbox"
        id={props.id}
        name={props.id}
        checked={props.budgetFormData[props.id]}
        onChange={() => props.addProduct(props.id)}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
