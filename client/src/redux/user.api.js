
export default async ({ url, form }) => {
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
    return null;
  }
};
