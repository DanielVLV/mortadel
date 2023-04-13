import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/user.slice';


function Auth() {
  // const user = useSelector((state) => state.UserSlice.value);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate('/');

  //   }
  // }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = isSignUp ? 'http://localhost:3003/signin' : 'http://localhost:3003/signup';
    dispatch(signUpUser({ url, form }));

    setForm({
      name: '',
      email: '',
      phone: '',
      password: '',
    });
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
              <input type="text" name="email" value={form.email} placeholder="Почта" onChange={handleInput} />
            </div>
            <div>
              <input type="password" name="password" value={form.password} placeholder="Пароль" onChange={handleInput} />
            </div>
          </>

        ) : (
          <>
            <div>
              <div>
                <input type="text" name="name" value={form.name} placeholder="Имя" onChange={handleInput} />
              </div>
              <div>
                <input type="text" name="email" value={form.email} placeholder="Почта" onChange={handleInput} />
              </div>
              <input type="number" name="phone" value={form.phone} placeholder="Телефон" onChange={handleInput} />
            </div>
            <div />
            <div>
              <input type="password" name="password" value={form.password} placeholder="Пароль" onChange={handleInput} />
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

