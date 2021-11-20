import style from './style.module.css';
import './style.module.css';

function ContactsPage() {
    return (
      <>
      <div className={style.container}>
        <h1>Контакты</h1>
        <a href="tel:+380671214301" className={style.phone_link_number}>+38 067 121 43 01</a>
        <a href="mailto:info@yard2.com.ua" className={style.phone_link_number}>info@yard2.com.ua</a>
      </div>
      
      </>
    );
  }
  
  export default ContactsPage;