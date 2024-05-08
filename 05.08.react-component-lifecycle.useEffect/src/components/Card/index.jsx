import { useEffect, useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  //   useEffect(() => {
  //     console.log("card component mounted");

  //     return () => {
  //       console.log("card component unmounted");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("card component updated by count state");
  }, [searchValue]);

  //   console.log("updated");
  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <h3>Card Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Iste
        placeat hic eum, maiores.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
      <hr />

      <input
        type="search"
        placeholder="type here.."
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Card;
