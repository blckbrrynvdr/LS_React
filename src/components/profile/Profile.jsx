import Input from '../input/Common';
import { Button } from "@material-ui/core";
import './Profile.css';
import { connect } from 'react-redux';
import { pushCardData } from '../../store/actions/card';
import { useState } from 'react';

const Profile = (props) => {
  
  const [cardData, setCardData] = useState(props.card)
  
  const { cardName, cardNumber, expiryDate, cvc } = cardData;

  const inputHandler = (e) => {
    
    setCardData(
      { 
        cardName: e.target.name === 'cardName' ? e.target.value : cardName,
        cardNumber: e.target.name === 'cardNumber' ? e.target.value : cardNumber,
        expiryDate: e.target.name === 'expiryDate' ? e.target.value : expiryDate,
        cvc: e.target.name === 'cvc' ? e.target.value : cvc,
      }
    )
  }

  const saveCard = (event) => {
    event.preventDefault();
    const { cardName, cardNumber, expiryDate, cvc } = event.target;
    
   props.pushCardData(cardNumber.value, expiryDate.value, cardName.value, cvc.value, props.token);

  }

  return (
    <div className="profile">
      <form className="profile__box" onSubmit={saveCard}>
        <div className="profile__head">
          <h1 className="profile__title">Профиль</h1>
          <div className="profile__subtitle">Ввдеите платежные данные</div>
        </div>
        <div className="profile__body">
          <div className="profile__col">
            <div className="profile__inputRow">
              <Input
                id={'name'}
                labelText={'Имя владельца'}
                className={'profile__input'}
                type={'text'}
                name={'cardName'}
                value={cardName}
                onInput={inputHandler}
              />
            </div>
            <div className="profile__inputRow">
              <Input
                id={'name'}
                labelText={'Номер карты'}
                className={'profile__input'}
                type={'text'}
                name={'cardNumber'}
                value={cardNumber}
                onInput={inputHandler}
              />
            </div>
            <div className="profile__inputRow">
              <div className="profile__inputCol">
                <Input
                  id={'name'}
                  labelText={'MM/YY'}
                  className={'profile__input'}
                  type={'text'}
                  name={'expiryDate'}
                  value={expiryDate} 
                  onInput={inputHandler}
                />
              </div>
              <div className="profile__inputCol">
                <Input
                  id={'name'}
                  labelText={'CVC'}
                  className={'profile__input'}
                  type={'text'}
                  name={'cvc'}
                  value={cvc}
                  onInput={inputHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile__submitBox">
          <Button 
              className="button-common profile__submit" 
              color="primary" 
              type="submit"
              data-testid="submitButton"
            >Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default connect(
  state => ({token: state.auth.token, card: state.card}),
  { pushCardData }
)(Profile);
