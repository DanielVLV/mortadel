

export const signUpFetch = async (form) => {
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
  }
};

export const signInFetch;
