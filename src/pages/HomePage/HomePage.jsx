import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../apiFunctions';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const result = await getTrendingMovies();

      setTrendingMovies(result);
      return result;
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePage}>
      <h1>Trending this week</h1>
      <ul className={css.movieList}>
        {trendingMovies.map((item) => {
          return (
            <Link
              to={`movies/${item.id}`}
              className={css.movieItem}
              key={item.id}
            >
              <img
                className={css.trendMovieImg}
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
