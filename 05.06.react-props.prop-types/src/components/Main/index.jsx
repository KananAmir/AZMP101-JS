import Button from "../Button";
import Child from "../Child";
import PropTypes from "prop-types";

const Main = ({ userName, age }) => {
  return (
    <div>
      <h2>Main Component</h2>
      <Child userName={userName} />
      <Button text={"main btn"} variant="orange" />
      <p>age is {age}</p>
    </div>
  );
};

Main.propTypes = {
  userName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
export default Main;
