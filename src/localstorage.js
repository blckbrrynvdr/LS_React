export const setLoginDataToLocalStorage = (isLoggedIn, token) => {
  localStorage.setItem('loginData', JSON.stringify({
    isLoggedIn,
    token
  }))
}

export const getLoginDataFromLocalStorage = () => {
  if (!localStorage.getItem('loginData')) {
    localStorage.setItem('loginData', JSON.stringify({
      isLoggedIn: false,
      token: ''
    }))
  }
  
  return JSON.parse(localStorage.getItem('loginData'))
}

export const setCardDataToLocalStorage = (cardNumber, expiryDate, cardName, cvc, valid = true) => {
  localStorage.setItem('cardData', JSON.stringify({ cardNumber, expiryDate, cardName, cvc, valid }));
}

export const getCardDataFromLocalStorage = () => {
  if (!localStorage.getItem('cardData')) {
    localStorage.setItem('cardData', JSON.stringify({ cardNumber:'', expiryDate:'', cardName:'', cvc:'', valid: false }))
  }

  return JSON.parse(localStorage.getItem('cardData'));
}