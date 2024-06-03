import { useRef } from "react";

const CardComp = () => {
  const headingRef = useRef();
  const inputRef = useRef();
  return (
    <div>
      <h1 ref={headingRef}>AZMP101</h1>
      <button
        onClick={() => {
          console.log(headingRef.current.textContent);
        }}
      >
        get text content
      </button>
      <hr />
      <input type="text" placeholder="type here.." ref={inputRef} />

      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>

    </div>
  );
};

export default CardComp;
