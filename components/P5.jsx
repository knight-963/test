import styles from '../styles/P.module.css'

function P5() {

    return (
       <div>

        <h2 className={styles.k}>new collection</h2>

        <div className='flex justify-center gap-[50px]'>

            <div className='flex'>
                <img src={"f1.png"} className='h-[500px] w-[650px]' alt="" />
                <button className={styles.bt}>Выбирают дети</button>
            </div>

            <div className='mt-[300px] flex'>
                <img src={"f2.png"} alt="" />
                <button className={styles.bt1}>Выбирают родители</button>
            </div>

        </div>

       </div>
     )
   }
   
   export default P5;