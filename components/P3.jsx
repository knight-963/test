import styles from '../styles/P.module.css'

function P3() {

    return (
       <div className='flex justify-center items-center gap-[50px] m-[100px]'>

        <div className={styles.c}>

          <h2 className='text-9xl'>why<br></br>
          weestep?</h2>
          <br></br>
          <br></br>
          <h2 className='text-3xl'>долговечность и удобство</h2>
          <br></br>
          <h2 className='text-black'>обувь только из натуральной кожи</h2>

        </div>

        <img src={"p4.png"} className='ml-[-250px]' alt="" />

       </div>
     )
   }
   
   export default P3;