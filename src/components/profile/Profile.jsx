import Input from '../input/Common';
import { Button } from "@material-ui/core";
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <form className="profile__box">
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
              />
            </div>
            <div className="profile__inputRow">
              <Input
                id={'name'}
                labelText={'Номер карты'}
                className={'profile__input'}
                type={'text'}
                name={'cardNumber'}
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
                />
              </div>
              <div className="profile__inputCol">
                <Input
                  id={'name'}
                  labelText={'CVC'}
                  className={'profile__input'}
                  type={'text'}
                  name={'cvc'}
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

export default Profile;
