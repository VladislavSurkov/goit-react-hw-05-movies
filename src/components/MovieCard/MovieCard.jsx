import { imgBaseUrl } from '../../services/fetchMovies';
import {
  Container,
  Img,
  Title,
  Wrapper,
  Year,
  Description,
  Text,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const imgUrl = poster_path
    ? imgBaseUrl.concat(poster_path)
    : 'https://d16u9y6cg00afk.cloudfront.net/Ke58811ef482bae9b4724_by_StickerStealRobot/659227.512.webp';
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

  return (
    <Container>
      <Img src={imgUrl} alt="{title}" width="350" />
      <Wrapper>
        <Title>
          {title} <Year>({releaseDate})</Year>
        </Title>
        <Description>
          User score: <Text>{voteScore}</Text>
        </Description>
        <Description>
          Overview: <Text>{overview}</Text>
        </Description>
        <Description>
          Genres: <Text>{genresList}</Text>
        </Description>
      </Wrapper>
    </Container>
  );
};
