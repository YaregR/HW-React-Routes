import style from './style.module.css';

function AboutPage() {
  return (
    <>
      <div className={style.container}>
        <h1>О нас</h1>
        <div className={style.text}>
          Компания Yard предоставляет сервис по заказу любой полиграфической продукции
        </div>
      </div>
      
    </>
  );
}

export default AboutPage;
