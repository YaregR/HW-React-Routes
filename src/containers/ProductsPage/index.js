
import style from './style.module.css';
import doorsign from './img/doorsign.jpg';
import bag from './img/bag.jpg';
import presentation from './img/presentation.jpg';
import sticker from './img/sticker.jpg';

function ProductsPage() {
  return (
    <>
      <div className={style.container}>
               
        <div className={style.photos}>
          <img src={doorsign} alt="doorsign" />
          <img src={bag} alt="bag" />
          <img src={presentation} alt="presentation" />
          <img src={sticker} alt="sticker" />
        </div>
       
      </div>    
    </>
  );
}

export default ProductsPage;
