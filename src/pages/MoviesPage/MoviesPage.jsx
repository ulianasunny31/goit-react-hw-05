import { Formik, Form, Field } from 'formik';
import css from './MoviesPage.module.css';
import MoviesList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../apiFunctions';
import { useFetch } from '../../hooks/useFetch';

const MoviesPage = () => {
  const [searchParams, setSearchparams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const [movies] = useFetch(getMovieByQuery, query);

  const initialValues = {
    query,
  };

  function handleSubmit(values) {
    if (values.query.trim() === '') setSearchparams({});
    setSearchparams({ query: values.query });
  }

  return (
    <div className={css.formDiv}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field type="text" name="query" className={css.input} />
          <button className={css.btnSubmit} type="submit">
            SEARCH
          </button>
        </Form>
      </Formik>

      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;
