import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register ({ onRegister, setRegisterErr, setIsInfoTooltipOpen }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      navigate('/', {replace: true})
    }
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({email, password})
      .then(() => {
        resetForm();
        navigate('/', {replace: true});
        setRegisterErr(false);
        setIsInfoTooltipOpen((prev) => !prev);
      })
      .catch((err) => {
        console.log(err)
        setRegisterErr(true);
        setIsInfoTooltipOpen((prev) => !prev);
      });
  }

  return (
    <div className="register">
      <h3 className="register__title">Регистрация</h3>
      <form className="register__form" onSubmit={handleSubmit}>
        <input id="email-input" type="email" name="email" placeholder="Email" className="register__form_input"
                minLength="2" maxLength="100" required value={email} onChange={handleChangeEmail}/>
        <span className="email-input-error"></span>
        <input id="password-input" type="password" name="password" placeholder="Пароль"
                className="register__form_input" minLength="2" maxLength="100" required value={password} onChange={handleChangePassword}/>
        <span className="password-input-error"></span>
      <button type="submit" className="register__submit-button">Зарегистрироваться</button>
      </form>
      <div className="register__log-in">
        <p className="register__log-in_title">Уже зарегистрированы? <Link to="/signin" className="register__log-in_link">Войти</Link></p>
      </div>
    </div >
  )
}

export default Register;