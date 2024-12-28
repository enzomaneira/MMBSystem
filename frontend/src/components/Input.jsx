import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  text,
  name,
  placeholder = "Digite aqui...",
  handleOnChange,
  value,
  options = [],
  index,
  errorMessage = "",
  min,
  max,
  step
}) => {
  const handleChange = (event) => {
    if (type === "number") {
      const inputValue = parseFloat(event.target.value);
      const minValue = min !== undefined ? parseFloat(min) : Number.MIN_SAFE_INTEGER;
      const maxValue = max !== undefined ? parseFloat(max) : Number.MAX_SAFE_INTEGER;

      if (!isNaN(inputValue) && inputValue >= minValue && inputValue <= maxValue) {
        handleOnChange(name, inputValue, index);
      }
    } else {
      handleOnChange(name, event.target.value, index);
    }
  };

  return (
    <div className={`${styles.form_control} ${errorMessage ? styles.error : ""}`}>
      <label htmlFor={name}>{text}:</label>
      {type === "select" ? (
        <select
          name={name}
          id={name}
          className={styles.select}
          onChange={handleChange}
          value={value}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
          step={type === "number" ? step : undefined}
        />
      )}
      {errorMessage && <span className={styles.error_message}>{errorMessage}</span>}
    </div>
  );
};

export default Input;