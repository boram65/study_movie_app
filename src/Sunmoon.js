function info(name, 학번) {
  return `${name} 학번 : ${학번}`;
}

function Sunmoon(props) {
  console.log(props);

  return <h2>{info(props.name, props.학번)}</h2>;
}
export default Sunmoon;
