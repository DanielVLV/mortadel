import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [form, setForm] = useState();
  const navigate = useNavigate();

  const hendleClick = (event) => {
    event.preventDefault();
    navigate('/auth');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await fetch('http://localhost:3003/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'content-type': 'appplication/json',
        },
        body: JSON.stringify(),
      });
      const res = user.json();
      console.log('<><><><><><><><><><><><><><><><><><>', res);
      navigate('/categories');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input type="text" name="email" placeholder="Почта" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="password" name="password" placeholder="Пароль" onChange={handleInput} />
      </div>
      <button type="submit">Войти</button>
      <button onClick={hendleClick} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default Login;
