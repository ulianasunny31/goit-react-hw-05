import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../apiFunctions';
import css from './MovieCast.module.css';
import Loader from '../Loader/Loader';
import { useFetch } from '../../hooks/useFetch';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast] = useFetch(getMovieCast, movieId);

  if (!cast) {
    return <Loader />;
  }

  return (
    <ul className={css.castList}>
      {cast.map((item) => {
        return (
          <li key={item.cast_id}>
            {item.profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
              />
            ) : (
              <div className={css.imageDiv} alt="Poster">
                X
              </div>
            )}
            <div className={css.castNameDiv}>
              <p className={css.castNameP}>{item.name}</p>
              {item.character && (
                <p className={css.characterP}>{item.character}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
