import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { getMovieReviews } from '../../apiFunctions';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return <Loader />;
  }

  //See more animation
  function handleClick(e) {
    const textContainer = e.target.previousElementSibling;
    const button = e.target;

    const expandedClass = css.expanded;
    textContainer.classList.toggle(expandedClass);

    button.textContent = textContainer.classList.contains(expandedClass)
      ? 'See less'
      : 'See more';
  }

  return (
    <div className={css.reviewsDiv}>
      {!reviews ? (
        <ul className={css.reviewsList}>
          {reviews.map((item) => {
            return (
              <li key={item.id}>
                <div className={css.reviewNameDiv}>
                  {item.author_details.name ? (
                    <h4>{item.author_details.name}</h4>
                  ) : (
                    <h4>- -</h4>
                  )}

                  <h5>@{item.author_details.username}</h5>
                </div>
                <div className={css.reviewText}>
                  <p className={css.revTextDiv}>{item.content}</p>
                  <button className={css.seeMoreBtn} onClick={handleClick}>
                    See more
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className={css.noReview}>There are no reviews for this movie.</h3>
      )}
    </div>
  );
};

export default MovieReviews;
