import PropTypes from 'prop-types';
import { Button } from './Button.styled.js';
// клик по кнопке для загрузки еще 12 картинок
export const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};