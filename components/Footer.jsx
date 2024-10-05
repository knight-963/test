import styles from "../styles/Footer.module.css"

const Footer =()=>{
    return (
      <div className="flex justify-center">

        <div className={styles.Footer}>

          <img src={"p1.png"} className="h-[50px]" alt="" />

          <div>

            <h2>O нас</h2>
            <h2>Блог</h2>
            <h2>Каталог</h2>
            <h2>Где купить</h2>
            <h2>Контакты</h2>
            <h2>find your fit</h2>

          </div>

          <div>

            <h2>tiktok</h2>
            <h2>instagram</h2>
            <h2>facebook</h2>
            <h2>youtube</h2>

          </div>

          <div>

            <h2>Private policy</h2>
            <h2>Terms & conditions</h2>

          </div>

        </div>

      </div>
    );
  }
  export default Footer;
  