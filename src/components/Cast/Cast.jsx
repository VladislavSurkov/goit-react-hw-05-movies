import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, imgBaseUrl } from '../../services/fetchMovies';
import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCredits);
  }, [movieId]);

  return (
    <CastContainer>
      {credits.length !== 0 ? (
        <CastList>
          {credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <Img
                  src={
                    profile_path
                      ? imgBaseUrl.concat(profile_path)
                      : 'https://d16u9y6cg00afk.cloudfront.net/Ke58811ef482bae9b4724_by_StickerStealRobot/659227.512.webp'
                  }
                  alt={name}
                />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>We don`t have any cast for this movie</p>
      )}
    </CastContainer>
  );
};
export default Cast;
