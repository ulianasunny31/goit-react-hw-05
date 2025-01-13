import { getTrendingMovies } from '../../apiFunctions';
import css from './HomePage.module.css';
import MoviesList from '../../components/MovieList/MovieList';
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {
  const [trendingMovies] = useFetch(getTrendingMovies);

  return (
    <div className={css.homePage}>
      <h1>Trending this week</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
