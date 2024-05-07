import PropTypes from "prop-types";

const Result = ({ count }) => {
  return <span>{count}</span>;
};

Result.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Result;
