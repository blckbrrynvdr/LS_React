export const serverLogin = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`,
    {
        method: 'POST',
        body: JSON.stringify({
            'email': email,
            'password': password,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }
  ).then(res => res.json())
};

export const serverRegistration = async (email, password, name, surname) => {
  return fetch(
    `https://loft-taxi.glitch.me/register`,
    {
        method: 'POST',
        body: JSON.stringify({
            'email': email,
            'password': password,
            'name' : name,
            'surname' : surname,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }
  ).then(res => res.json())
}
