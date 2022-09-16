function Movie(props) {
  return (
    <>
      <hr></hr>
      <div>영화 이름 : {props.mName}</div>
      <div>영화 배우 : {props.actor}</div>
      <div>영화 장르 : {props.genre}</div>
      <div>상영 시간 : {props.time ? props.time.join(",") : null}</div>
    </>
  );
}

export default Movie;
