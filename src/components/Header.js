import { Link, Routes, Route } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header({isLogged, userData, onSignOut}) {

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Надпись: Mesto Russia, логотип проекта." />
      <div className='header__info-container'>
        {isLogged && <p className="header__email">{userData.email}</p>}
        <Routes>
          <Route path='/signup' element={
            <Link to='/signin' className='header__link'>Войти</Link>
          }/>
          <Route path='/signin' element={
            <Link to='/signup' className='header__link'>Регистрация</Link>
          }/>
          <Route path='/' element={
            <Link to='/signin' className='header__link header__link_logged' onClick={onSignOut}>Выйти</Link>
          }/>
        </Routes>
      </div>
    </header>
  )
}

export default Header;