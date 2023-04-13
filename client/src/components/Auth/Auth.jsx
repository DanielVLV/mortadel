import React, { useState } from 'react';


function Auth() {
  const [form, setForm] = useState({});
  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:3003/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input type="text" name="name" placeholder="Имя" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="text" name="email" placeholder="Почта" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="number" name="phone" placeholder="Телефон" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="password" name="password" placeholder="Пароль" onChange={handleInput} />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
  );
}


export default Auth;

