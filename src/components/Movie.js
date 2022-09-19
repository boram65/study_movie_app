import PropTypes from "prop-types";
import "./Movie.css";

const Movie = props => {
  return (
    <div className="movie_data">
      <img
        className="movie_poster"
        src={`${props.poster_path}`}
        height="300"
      ></img>
      <div className="movie_title">{props.title}</div>
      <div className="movie_ovorview">{props.overview.slice(0, 100)}...</div>
      <div className="movie_vote">
        {/* ({props.vote_average}/10){" "} */}
        {Array(Number(props.vote_average.toFixed(0)))
          .fill(0)
          .map((ele, idx) => {
            return <span key={idx}>⭐️</span>;
          })}
      </div>
      <div className="movie_adult ">{props.adult}</div>
      <div className="movie_lang">언어 : {props.original_language}</div>
      <div className="movie_date movie_viewt">
        개봉일 : {props.release_date}
      </div>
      <div className="movie_id movie_viewt">ID : {props.id}</div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  adult: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Movie;
