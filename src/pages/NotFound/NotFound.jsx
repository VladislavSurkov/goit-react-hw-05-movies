import { BackLink } from './NotFound.styled'

const NotFound = () => {
  return (
    <>
      <h2>Oops... nothing found...</h2>
      <BackLink to="/">Back to home</BackLink>
    </>
  );
};
export default NotFound;
