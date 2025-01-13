/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map((item) => {
        return (
          <Link
            state={location}
            to={`/movies/${item.id}`}
            className={css.movieItem}
            key={item.id}
          >
            {item.poster_path ? (
              <img
                className={css.trendMovieImg}
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            ) : (
              <div className={css.imageDiv} alt="Poster">
                X
              </div>
            )}

            {item.title}
          </Link>
        );
      })}
    </ul>
  );
};

export default MovieList;
