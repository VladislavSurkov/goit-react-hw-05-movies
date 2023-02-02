import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByName, imgBaseUrl } from '../../services/fetchMovies';
import NotFound from '../../components/NotFound/NotFound';
import Loader from '../../components/Loader/Loader';
import {
  Form,
  Input,
  Button,
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('resolved');
  const location = useLocation();

  useEffect(() => {
    const onQuery = searchParams.get('query') ?? '';
    if (!onQuery) return;

    getMoviesByName(onQuery).then(results => {
      setStatus('pending');
      if (results.length === 0) return setStatus('rejected');

      setStatus('resolved');
      setMovies(results);
    });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Please enter something :)');
      return;
    }
    setSearchParams({ query });
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={query} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <NotFound />}
      {status === 'resolved' && movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title, name, poster_path }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={
                    poster_path
                      ? imgBaseUrl.concat(poster_path)
                      : 'https://d16u9y6cg00afk.cloudfront.net/Ke58811ef482bae9b4724_by_StickerStealRobot/659227.512.webp'
                  }
                  alt={title ?? name}
                />
                <MovieTitle>
                  <h3>{title ?? name}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </>
  );
};
export default Movies;
