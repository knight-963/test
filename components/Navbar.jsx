import styles from '../styles/Navbar.module.css'

const Navbar =()=>{
    return (
      <div className='bg-gray-200'>
  
        <nav className={styles.nav}>

          <img src={"p1.png"} className='flex justify-start' alt="" />

            <ul className="flex justify-end">

                <a className={styles.a}>о нас</a>
                <a className={styles.a}>Каталог</a>
                <a className={styles.a}>Где купить</a>
                <a className={styles.a}>Блог</a>
                <a className={styles.a}>Контакты</a>
                <a className={styles.a}>find yor fit</a>

            </ul>

        </nav>
  
      </div>
    );
  }
  export default Navbar;
  