import React from "react";
import propTypes from "prop-types";

function Movie(props) {
  //console.log(Number(props.price));
  return (
    <>
      <hr></hr>
      <div>
        영화 이름 : {props.mName ? "🕶" + props.mName + "🕶" : "이름정보 없음"}
      </div>
      <div>
        영화 배우 : {props.actor ? "👀" + props.actor + "👀" : "배우정보 없음"}
      </div>
      <div>영화 장르 : {props.genre}</div>
      <div>
        상영 시간 :{" "}
        {props.time
          ? props.time
              .filter(ele => {
                return typeof ele === "string" ? true : false;
              })
              .join(",")
          : "상영정보 없음"}
      </div>
      <div>티켓 가격 : {props.price ? props.price + 500 : "가격정보 없음"}</div>
    </>
  );
}

Movie.propTypes = {
  mName: propTypes.string.isRequired,
  actor: propTypes.string.isRequired,
  genre: propTypes.arrayOf(propTypes.string.isRequired),
  price: propTypes.number,
};

export default Movie;
