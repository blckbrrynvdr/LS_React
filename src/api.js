const serverDomain = 'https://loft-taxi.glitch.me';

export const serverLogin = async (email, password) => {
  return fetch(
    `${serverDomain}/auth`,
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
    `${serverDomain}/register`,
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

export const pushCardDataToServer = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(`${serverDomain}/card`, {
    method: 'POST',
    body: JSON.stringify({
      'cardNumber': cardNumber,
      'expiryDate': expiryDate,
      'cardName': cardName,
      'cvc': cvc,
      'token': token,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json());
}

export const getCardDataFromServer = async (token) => {
  return fetch(`${serverDomain}/card?token=${token}`)
    .then(res => res.json())
}

export const getAddressesFromServer = async () => {
  return fetch(`${serverDomain}/addressList`)
    .then(res => res.json())
}

export const getRoutesFromServer = async (from, to) => {
  return fetch(`${serverDomain}/route?address1=${from}&address2=${to}`)
    .then(res => res.json())
}