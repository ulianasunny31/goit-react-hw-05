import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../apiFunctions';
import css from './HomePage.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';

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
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
