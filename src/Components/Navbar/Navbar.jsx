
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={'nav-container'}>
        <nav className={styles['navbar']}>
        <Link to='/' className={styles['styled-link']}>  <div className={styles['logo']}>
               
               <img src="https://static.vecteezy.com/system/resources/thumbnails/025/400/624/small_2x/vintage-book-stack-woth-flower-illustration-ai-generative-png.png" alt="" className={styles['logo-image']}/>
               
           </div></Link>
          
            <div className={styles['navigations']}>
                <ul>
                 <li><Link to='/' className={styles['styled-link']}>Home</Link></li>  
                    <li ><Link to='/browse/collection' className={styles['styled-link']}>Collection</Link> </li>
                    <li><Link to='/addbooks' className={styles['styled-link']}>Add books</Link> </li>
                    
                </ul>
            </div>
            <div >
                <button className={styles['btn']}>Login</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar