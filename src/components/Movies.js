import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movies.css";

function Movies(props) {
  //console.log(props.apiPath);
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const [flag, setFlag] = useState(false);

  const getMovieAPI = async () => {
    console.log(props.apiPath + "문지기 on");
    if (!props.apiPath) return;
    console.log("문지기 ㅎㅇ  ");

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=b2c40fffcdf11a119c54825b1eb6fc77&language=ko&page=1&region=KR`
    );

    setMovies(result.data.results);
  };

  useEffect(() => {
    setMovies([]);
    getMovieAPI();
  }, [props.apiPath]);

  setTimeout(() => {
    setLoding(false);
  }, 100);

  return (
    <>
      <div>
        {loding ? (
          <div>로딩중...</div>
        ) : (
          <div>
            {movies.map((ele, idx) => {
              return (
                <Movie
                  title={movies[idx].title}
                  poster_path={`https://image.tmdb.org/t/p/original${movies[idx].poster_path}`}
                  overview={movies[idx].overview}
                  vote_average={movies[idx].vote_average}
                  adult={movies[idx].adult ? "19" : "19"}
                  original_language={movies[idx].original_language}
                  release_date={movies[idx].release_date}
                  id={movies[idx].id}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default Movies;
