import PropTypes from "prop-types";

const Wellcome = ({ studentObj }) => {
  // const { studentObj } = props;
  console.log(studentObj);
  return (
    <h3>
      Wellcome {studentObj.firstName} {studentObj.lastName}, gpa is{" "}
      {studentObj.gpa}
    </h3>
  );
};

Wellcome.propTypes = {
  // studentObj: PropTypes.object,
  studentObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    gpa: PropTypes.number,
  }),
};
export default Wellcome;
