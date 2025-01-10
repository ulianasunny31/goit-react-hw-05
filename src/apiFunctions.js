import axios from 'axios';

const API_KEY = '22f83acf82b19ea89c89cd80479e3f15';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmY4M2FjZjgyYjE5ZWE4OWM4OWNkODA0NzllM2YxNSIsIm5iZiI6MTcxMzY4ODAwMC41NTgsInN1YiI6IjY2MjRjZGMwNjNkOTM3MDE4NzcyZWU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GIfVVTTXHVv8tnMaxwh0wdzGQBpQwOacFg6jC-jpeyA',
  },
});

export async function getTrendingMovies() {
  const { data } = await request.get('/trending/movie/week');
  return data.results;
}

export async function getMovieById(movieId) {
  const { data } = await request.get(`/movie/${movieId}`);
  return data;
}

export async function getMovieReviews(movieId) {
  const { data } = await request.get(`/movie/${movieId}/reviews`);
  return data;
}

export async function getMovieCast(movieId) {
  const { data } = await request.get(`/movie/${movieId}/credits`);
  return data;
}

// async function getMovieByQuery() {
//   //
// }
