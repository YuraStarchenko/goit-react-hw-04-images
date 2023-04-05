import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { GlobalStyle } from '../GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './Container.styled';
import { LoadMore } from './Button/Button';
import { ModalImage } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImage } from './Api';
export class App extends Component {
  state = {
    images: [],
    status: '',
    numberPage: 1,
    loading: false,
    error: null,
    showModal: false,
    loadMore: null,
    query: '',
    largeImageUrl: '',
  };

  // для открытия большой картинки
  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModalImg();
  };

  // для открытия модалки с картинкой
  toggleModalImg = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  // сабмит инпута
  searchSubmit = value => {
    this.setState({ query: value, numberPage: 1, images: [], loadMore: null });
  };

  // для кнопки загрузить еще
  handleLoadMore = () => {
    this.setState(prevState => ({
      numberPage: prevState.numberPage + 1,
    }));
  };
  // обновление данных
  componentDidUpdate(prevProps, prevState) {
    const { numberPage, query } = this.state;
    if (
      prevState.numberPage !== this.state.numberPage ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });
      fetchImage(query, numberPage)
        .then(e =>
          this.setState(prevState => ({
            images: [...prevState.images, ...e.hits],
            status: '',
            loadMore: 12 - e.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  render() {
    const { images, status, showModal, largeImageUrl, loadMore } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.searchSubmit} />
        {showModal && (
          <ModalImage imgUrl={largeImageUrl} onClose={this.toggleModalImg} />
        )}
        <ImageGallery images={images} onClick={this.getLargeImgUrl} />
        {status === 'loading' && <Loader />}
        {loadMore === 0 && <LoadMore onClick={this.handleLoadMore} />}
        <GlobalStyle />
      </Container>
    );
  }
}
