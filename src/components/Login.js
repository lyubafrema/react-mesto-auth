import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login ({ onLogin }) {
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

    onLogin({email, password})
      .then(resetForm())
      .then(() => navigate('/', {replace: true}))
      .catch((err) => console.log(err));
  }

  return (
    <div className="register">
      <h3 className="register__title">Вход</h3>
      <form className="register__form" onSubmit={handleSubmit}>
        <input id="email-input" type="email" name="email" placeholder="Email" className="register__form_input"
                minLength="2" maxLength="100" required value={email} onChange={handleChangeEmail}/>
        <span className="email-input-error"></span>
        <input id="password-input" type="password" name="password" placeholder="Пароль"
                className="register__form_input" minLength="2" maxLength="100" required value={password} onChange={handleChangePassword}/>
        <span className="password-input-error"></span>
      <button type="submit" className="register__submit-button">Войти</button>
      </form>
    </div >
  )
}

export default Login;