import { domainAddress } from '../constants/api';

export const signUpFetch = async ({ url, form }) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (data.msg) {
      throw new Error(data.msg);
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const checkUserFetch = async () => {
  try {
    const res = await fetch(domainAddress, {
      credentials: 'include',
    });
    const user = await res.json();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signoutFetch = async (user) => {
  try {
    const res = await fetch(`${domainAddress}/signout`, { credentials: 'include' });

    if (res.status === 200) {
      return null;
    }
    throw new Error('status not 200');
  } catch (error) {
    console.error(error);
    return user;
  }
};
