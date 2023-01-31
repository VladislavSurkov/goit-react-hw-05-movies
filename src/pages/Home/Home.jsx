import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies, imgBaseUrl } from '../../services/fetchMovies';

import {
  HomeContainer,
  HomeTitle,
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Tranding today</HomeTitle>
      {movies.length > 0 && (
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
    </HomeContainer>
  );
};

export default Home;
