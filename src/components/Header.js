import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header({isLogged, userData, onSignOut}) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Надпись: Mesto Russia, логотип проекта." />
      <div className='header__info-container'>
        {isLogged && <p className="header__email">{userData.email}</p>}
        {location.pathname === '/signup' && <Link to='/signin' className='header__link'>Войти</Link> }
        {location.pathname === '/signin' && <Link to='/signup' className='header__link'>Регистрация</Link> }
        {location.pathname === '/' && <Link to='/signin' className='header__link header__link_logged' onClick={onSignOut}>Выйти</Link> }
      </div>
    </header>
  )
}

export default Header;