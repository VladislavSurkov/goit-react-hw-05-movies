import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/fetchMovies';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Btn, Container, InfoLink } from './MovieDetails.styled';
import Loader from '../../components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backToMovies = () => {
    navigate(location.state?.from ?? '/movies');
  };
  return (
    <>
      <Btn type="button" onClick={backToMovies}>
        Go Back
      </Btn>
      <MovieCard movie={movieDetails} />
      <Container>
        <InfoLink to={'cast'} state={{ from: location?.state?.from }}>
          Cast
        </InfoLink>
        <InfoLink to={'reviews'} state={{ from: location?.state?.from }}>
          Reviews
        </InfoLink>
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
