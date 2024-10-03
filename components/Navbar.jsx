import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

const Navbar =()=>{
    return (
      <div>
  
        <nav className={styles.nav}>

            <ul>

                <Link  href='/' className={styles.links}>Home</Link>
                <a className={styles.links}>Page-1</a>
                <a className={styles.links}>Page-2</a>
                <a className={styles.links}>Page-3</a>
                <Link  href='/About' className={styles.links}>Registr</Link>

            </ul>

        </nav>
  
      </div>
    );
  }
  export default Navbar;
  