import Movie from "./Movie";

const movies = [
  {
    id: 1,
    영화명: "탑건",
    주연배우: "톰크루즈",
    장르: "비행시뮬",
    상영시간: ["10:00", "15:00", "18:00", "20:00"],
    티켓가격: 15000,
  },
  {
    id: 2,
    영화명: "토르-러브엔썬더",
    주연배우: "햄식",
    장르: "히어로액션",
    상영시간: ["14:00", "16:00", "19:00", "22:00"],
    티켓가격: 14000,
  },
  {
    id: 3,
    영화명: "존윅-파라벨룸",
    주연배우: "키이누리브스",
    장르: "액션",
  },
];

function Movies() {
  //함수안에 js문법을 반환하는것을 컴포넌트라 부른다.
  return (
    <>
      <div>영화앱</div>
      {movies.map(function (mvi) {
        return (
          <Movie
            key={mvi.id}
            mName={mvi.영화명}
            actor={mvi.주연배우}
            genre={mvi.장르}
            time={mvi.상영시간}
            price={mvi.티켓가격}
          />
        );
      })}
      <Movie
        mName={"상영시간이 숫자임ㅋㅋ"}
        actor={"가격이 문자열인 영화"}
        genre={"문자열로 출력해 버리기"}
        time={["1400", "1600"]}
        price={1234500}
      />
    </>
  );
}

export default Movies;
