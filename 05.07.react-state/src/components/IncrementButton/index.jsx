import PropTypes from "prop-types";

const IncrementButton = ({ count, setCount }) => {
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
};

IncrementButton.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func,
};
export default IncrementButton;
