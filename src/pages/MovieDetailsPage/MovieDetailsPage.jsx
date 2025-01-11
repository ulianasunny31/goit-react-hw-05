import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { getMovieById } from '../../apiFunctions';
import { useState, useEffect, useRef } from 'react';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const location = useLocation();

  const gobackPlace = useRef(location.state);

  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
        return movie;
      } catch (error) {
        console.log('Error: ', error);
      }
    };

    fetchMovieById();
  }, [movieId]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <div className={css.movieDiv}>
      <Link to={gobackPlace.current} className={css.goBack}>
        Go Back
      </Link>
      <div className={css.movieDetailsDiv}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div className={css.movieSmallInfo}>
          <h2>{movie.title}</h2>
          <ul className={css.genresList}>
            {movie.genres.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
          <p className={css.ratingP}>
            Rating: <span>{movie.vote_average}</span>
          </p>
          <p className={css.overviewP}>
            Overview: <span>{movie.overview}</span>
          </p>
        </div>
      </div>
      <nav className={css.movieNav}>
        <ul>
          <li>
            <Link className={css.movieLink} to="cast">
              Cast
            </Link>
          </li>

          <li>
            <Link className={css.movieLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
