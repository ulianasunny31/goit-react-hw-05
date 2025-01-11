import { Formik, Form, Field } from 'formik';
import css from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../apiFunctions';

const MoviesPage = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const fetchByQuery = async () => {
      try {
        const { results } = await getMovieByQuery(query);
        setMovies(results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchByQuery();
  }, [query]);

  const initialValues = {
    query,
  };

  function handleSubmit(values) {
    if (values.query.trim() === '') setSearchparams({});
    setSearchparams({ query: values.query });
  }

  return (
    <div className={css.moviesPageDiv}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;
