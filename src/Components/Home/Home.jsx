import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';



const Home = () => {
    const navigate = useNavigate();
  return (
   <>
   <Navbar/>
   <div className={styles['container']}>
            
            <div className={styles['left-sec']}>
                <div className={styles['title']}>
                    <h1>Welcome to ReaderSpace: <br /> <small>The Heart of Every Book Lover </small>  </h1>
                    <p>A space built by readers, for readers.Find your next favorite read, right here in the heart of books.Open a book, and let the adventure begin!</p>
                    <button onClick={()=>navigate('/browse/collection') } className={styles['btn']}>Browse Collection</button>
                </div>
              
                
                
               

            </div>
            <div className={styles['right-sec']}>

                <div>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/025/400/624/small_2x/vintage-book-stack-woth-flower-illustration-ai-generative-png.png' alt="image-book" />
                </div>

                
            </div>
   </div>
   </>
  )
}

export default Home