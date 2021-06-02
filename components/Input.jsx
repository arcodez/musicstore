function Input(props) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={props.name}
      label={props.name}
      name={props.name}
      value={props.value}
      onChange={props.change}
    />
  );
}

export default Input;
