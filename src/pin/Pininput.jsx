import Pinitem from "./Pinitem";
import { useState, useRef } from "react";

function Pininput({ noOfBoxes = 5, length = 2, onChange }) {
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));

  const arr = new Array(noOfBoxes).fill(0);

  const ref = useRef([]);

  const handleChange = (value, index) => {
    values[index] = value;
    setValues([...values]);

    if (value.length === length && index < noOfBoxes - 1) {
      ref.current[index + 1].focus();
    }

    onChange && onChange(values.join(" "));
  };

  const handleBackSpace = (value, index) => {
    let tmp = values[index];
    values[index] = value;

    console.log(value, index, tmp);
    if (index > 0 && tmp.length === 0) {
      ref.current[index - 1].focus();
    }
    setValues([...values]);
    onChange(values.join(" "));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteValue = e.clipboardData
      .getData("text")
      .split("")
      .filter((a, i) => i < length * noOfBoxes);

    pasteValue.forEach((char, i) => {
      values[i] = char;
      console.log(ref.current[i]);
      ref.current[i].value = char;
      if (i < noOfBoxes - 1) {
        ref.current[i + 1].focus();
      }
      setValues([...values]);
      onChange && onChange(values.join(" "));
    });
  };

  return (
    <div>
      {values.filter(Boolean).length === noOfBoxes ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
          onPaste={handlePaste}
        >
          {arr.map((_, i) => (
            <Pinitem
              ref={(el) => (ref.current[i] = el)}
              key={i}
              color={"green"}
              length={length}
              handleChange={(v) => handleChange(v, i)}
              handleBackSpace={(v) => handleBackSpace(v, i)}
            />
          ))}
        </div>
      ) : (
        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          onPaste={handlePaste}
        >
          {arr.map((_, i) => (
            <Pinitem
              ref={(el) => (ref.current[i] = el)}
              key={i}
              color={"black"}
              length={length}
              handleChange={(v) => handleChange(v, i)}
              handleBackSpace={(v) => handleBackSpace(v, i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pininput;
