import { getTrendingMovies } from '../../apiFunctions';
import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {
  const [trendingMovies] = useFetch(getTrendingMovies);

  return (
    <div className={css.homePage}>
      <h1>Trending this week</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
