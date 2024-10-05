import styles from '../styles/P.module.css'

function P6() {

    return (
       <div>

        <h2 className='flex justify-center text-5xl pt-[100px]'>Где купить?</h2>

        <img src={"p6.jpg"} className='w-[100%] pt-[50px]' alt="" />
        <img src={"p7.jpg"} className='w-[100%]' alt="" />

        <div className='flex justify-center pt-[50px]'>
        <button className={styles.tb}>Выбрать</button>
        </div>

       </div>
     )
   }
   
   export default P6;