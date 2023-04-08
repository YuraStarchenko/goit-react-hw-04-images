import PropTypes from 'prop-types';
import { Div, ModalImg } from './Modal.styled.js';
import { useEffect } from 'react';

export const ModalImage = ({ imgUrl, onClose }) => {
  useEffect(() => {
    // Вызыв после того, как компонент был отрисован в DOM
    window.addEventListener('keydown', ModalKeydown);
    // вызов перед размонтированием и удалением компонента.
    return () => {
      window.removeEventListener('keydown', ModalKeydown);
    };
  });
  // Закрытие по кнопке Escape
  const ModalKeydown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Div onClick={handleClick}>
      <ModalImg>
        <img src={imgUrl} alt="" />
      </ModalImg>
    </Div>
  );
};
ModalImage.proptTypes = {
  onClose: PropTypes.func.isRequired,
};
