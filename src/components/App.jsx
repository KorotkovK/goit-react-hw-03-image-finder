import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
    showLoadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
        this.fetchImages(); 
    }
  }

  handleSearch = (query) => {
    this.setState({ query, images: [], page: 1, showLoadMore: false });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    const apiKey = '39292315-4a49a35cd99dea9ef99c54ebb';

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        if (response.data.hits.length > 0) {
          this.setState((prevState) => ({
            images: [...prevState.images, ...response.data.hits],
            // page: prevState.page + 1,
            isLoading: false,
            showLoadMore: true,
          }));
        } else {
          this.setState({ isLoading: false, showLoadMore: false });
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleOpenModal = (image) => {
    this.setState({ showModal: true, selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage, showLoadMore } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleOpenModal} />
        {isLoading && <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
        {showLoadMore && images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal src={selectedImage} alt="Selected Image" onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
