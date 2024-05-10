import Input from "../Input";
import styled from "styled-components";

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="full name" />
      <hr />
      <hr />
      <Input type={"email"} placeholder="email" />
      <hr />
      <textarea placeholder="write here..." rows={6} />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: 1px solid teal;
  border-radius: 5px;
  transition: all 2s;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid teal;
    color: teal;
  }
`;
