import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../redux/user.slice';


function Auth() {
  const [form, setForm] = useState({});
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = isSignUp ? 'http://localhost:3003/auth' : 'http://localhost:3003/login';
    await dispatch(signUpUser({ url, form }));
    navigate('/');
  };

  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleFormChange = () => {
    setIsSignUp(!isSignUp);
  };

  return (

    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        {isSignUp ? (
          <>
            <div>
              <input type="text" name="email" placeholder="Почта" onChange={handleInput} />
            </div>
            <div>
              <input type="password" name="password" placeholder="Пароль" onChange={handleInput} />
            </div>
          </>

        ) : (
          <>
            <div>
              <div>
                <input type="text" name="name" placeholder="Имя" onChange={handleInput} />
              </div>
              <div>
                <input type="text" name="email" placeholder="Почта" onChange={handleInput} />
              </div>
              <input type="number" name="phone" placeholder="Телефон" onChange={handleInput} />
            </div>
            <div />
            <div>
              <input type="password" name="password" placeholder="Пароль" onChange={handleInput} />
            </div>
          </>
        )}
        <div>
          <input className="toggle" type="checkbox" id="toggle" onChange={handleFormChange} checked={!isSignUp} />
        </div>
        <button type="submit" className="btn btn-primary">{isSignUp ? 'Войти' : 'Зарегистрироваться' }</button>
      </div>
    </form>
  );
}


export default Auth;

