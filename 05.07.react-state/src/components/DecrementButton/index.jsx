import PropTypes from "prop-types";

const DecrementButton = ({ count, setCount }) => {
  return <button onClick={() => setCount(count - 1)}>Decrement</button>;
};

DecrementButton.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func,
};
export default DecrementButton;
