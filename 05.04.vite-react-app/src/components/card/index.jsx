export default function Card(props) {
  //   console.log(props);
  const { title } = props;
  return (
    <div>
      <h1>Card title: {title}</h1>
    </div>
  );
}
