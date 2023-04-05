import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ images, onClickImg }) => {
  return images.map((image, id) => {
    return (
      <Item key={id}>
        <Image
          onClick={() => {
            onClickImg(image.largeImageURL);
          }}
          src={image.webformatURL}
          alt={image.tags}
        />
      </Item>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClickImg: PropTypes.func.isRequired,
};