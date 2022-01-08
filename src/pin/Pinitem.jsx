import React from "react";

const Pinitem = React.forwardRef(
  (
    {
      length,
      handleChange,
      handleBackSpace,
      color = "black",
    },
    ref
  ) => {
    const defaultStyle = {
      width: "3rem",
      height: "3rem",
      borderStyle: "none",
      outline: "none",
      fontSize: "22px",
      padding: "0.5rem ",
      textAlign: "center",
      color: color,
      border: "2px solid",
      borderColor: color,
      borderRadius: "0.25rem",
    };

    const handleKeyUp = (e) => {
      console.log(e.code);
      switch (e.code) {
        case "Backspace": {
          console.log(1);
          handleBackSpace && handleBackSpace(e.target.value);
          break;
        }
        case "ShiftLeft":
        case "ShiftRight":
        case "Tab":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowDown":
          break;
        default: {
          handleChange(e.target.value);
        }
      }
    };

    return (
      <div>
        <input
          ref={ref}
          color={color}
          maxLength={length}
          style={defaultStyle}
          onKeyUp={handleKeyUp}
        />
      </div>
    );
  }
);

export default Pinitem;
