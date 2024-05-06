import "./index.css";
import PropTypes from "prop-types";

const Button = ({ variant, text }) => {
  return <button className={variant}>{text}</button>;
};

Button.propTypes = {
  variant: PropTypes.oneOf[("orange", "success", "danger")],
  text: PropTypes.string,
};
export default Button;
