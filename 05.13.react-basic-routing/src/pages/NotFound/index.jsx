import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>

      <Button onClick={() => navigate("/")}>Go Main Page</Button>
    </div>
  );
};

export default NotFound;
