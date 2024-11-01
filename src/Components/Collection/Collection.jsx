import { useEffect } from 'react';
import styles from './collection.module.css';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';

const Collection = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://readerspace-backend.onrender.com/api/books/'
      );
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        {loading ? (
          <div > <img  className={styles['loading']} src="https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D187567209W10000H1934/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/loading-symbol-sticker.jpg" alt="loading" /> </div>
        ) : (
          books.map((book, index) => (
            <div
              className={styles['book-card']}
              key={index}
            >
              <img
                className={styles['cover-image']}
                src={book.coverImage}
                alt="cover-page"
              />

              <h4>{book.title}</h4>
              <p className={styles['author']}> by : {book.author}</p>
              <p className={styles['genre']}>{book.genre}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Collection;
