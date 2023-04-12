import React, { useState } from 'react';


function Auth() {
  const [form, setForm] = useState({});
  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:3003/api/tags', {

      });
    } catch (error) {
      console.log(error);
    }
  };

  return (

  // <form onSubmit={(e) => handleSubmit(e)}>
    <>
      <div className="mb-3">
        <input type="text" className="form-control" name="name" aria-describedby="emailHelp" placeholder="Login" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" name="login" aria-describedby="emailHelp" placeholder="Name" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleInput} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </>
  // </form>
  );
}


export default Auth;

