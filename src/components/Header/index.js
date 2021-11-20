
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <>
        <div className={style.container}>
          <div className={style.links_wrapper}>
            <NavLink className={style.links} to='/about'>О нас</NavLink>
            <br />
            <NavLink className={style.links} to='/products'>Продукты</NavLink>
            <br />
            <NavLink className={style.links} to='/contacts'>Контакты</NavLink> 
          </div>
         
        </div>
      </>
    );
  }
  
  export default Header;