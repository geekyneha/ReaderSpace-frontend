import { useState } from 'react';
import styles from './addbooks.module.css';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      title:title,
      author:author,
      genre:genre,
     coverImage: coverImage,
    };
    axios
      .post('https://reader-space-backend.vercel.app/api/books/', bookData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error adding the book!', error);
      });

    setTitle('');
    setAuthor('');
    setGenre('');
    setCoverImage('');
    navigate('/browse/collection')
  };
  return (
    <>
    <Navbar/>
      <div className={styles['container']}>
        <h1>Add a new Book</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles['tilte']}>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className={styles['author']}>
            <label htmlFor="author">Author</label>
            <br />
            <input
              type="text"
              name="author"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
          </div>

          <div className={styles['genre']}>
            <label htmlFor="genre">Genre</label>
            <br />
            <input
              type="text"
              name="genre"
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
            />
          </div>
          <div className={styles['cover-image']}>
            <label htmlFor="cover-image">Cover Image url</label>
            <br />
            <input
              type="text"
              name="cover-image"
              id="cover-image"
              onChange={(e) => setCoverImage(e.target.value)}
              value={coverImage}
            />
          </div>
          <div>
            <button type="submit">Add to Collection</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBooks;
