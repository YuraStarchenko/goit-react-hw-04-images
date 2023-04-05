import PropTypes from 'prop-types';
import { ImageGalleryItem }  from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled.js';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <List>
      <ImageGalleryItem onClickImg={onClick} images={images} />
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
