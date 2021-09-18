import Input from '../input/Common';
import { Button } from "@material-ui/core";
import './Profile.css';
import { connect } from 'react-redux';
import { pushCardData } from '../../store/actions/card';
import { useForm } from 'react-hook-form';

const Profile = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { cardName, cardNumber, expiryDate, cvc } = props.card;

  const saveCard = (data) => {
    const { cardName, cardNumber, expiryDate, cvc } = data;
    props.pushCardData(cardNumber, expiryDate, cardName, cvc, props.token);
  }

  return (
    <div className="profile">
      <form className="profile__box" onSubmit={handleSubmit(saveCard)}>
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
                defaultValue={cardName}
                {...register("cardName", {
                  required: 'Обязательное поле',
                  minLength: {
                    value: 4,
                    message: "Имя владельца должно быть больше 4 символов"
                  },
                })}
                error={!!errors.cardName}
                helperText={errors.cardName && errors.cardName.message}
              />
            </div>
            <div className="profile__inputRow">
              <Input
                id={'name'}
                labelText={'Номер карты'}
                className={'profile__input'}
                type={'text'}
                name={'cardNumber'}
                defaultValue={cardNumber}
                {...register("cardNumber", {
                  required: 'Обязательное поле',
                  minLength: {
                    value: 16,
                    message: "Номер карты должен быть больше 16 символов"
                  },
                })}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber && errors.cardNumber.message}
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
                  defaultValue={expiryDate}
                  {...register("expiryDate", {
                    required: 'Обязательное поле',
                    minLength: {
                      value: 5,
                      message: "Поле из 5 символов"
                    },
                    maxLength: {
                      value: 5,
                      message: "Поле из 5 символов"
                    },
                    pattern: {
                      value: /^[0-9]{2}\/[0-9]{2}$/i,
                      message: "Некорректные данные"
                    }
                  })}
                  error={!!errors.expiryDate}
                  helperText={errors.expiryDate && errors.expiryDate.message}
                />
              </div>
              <div className="profile__inputCol">
                <Input
                  id={'name'}
                  labelText={'CVC'}
                  className={'profile__input'}
                  type={'text'}
                  name={'cvc'}
                  defaultValue={cvc}
                  {...register("cvc", {
                    required: 'Обязательное поле',
                    minLength: {
                      value: 3,
                      message: "Поле из 3 символов"
                    },
                    maxLength: {
                      value: 5,
                      message: "Поле из 3 символов"
                    },
                    pattern: {
                      value: /^[0-9]{3}$/i,
                      message: "Некорректный cvc"
                    }
                  })}
                  error={!!errors.cvc}
                  helperText={errors.cvc && errors.cvc.message}
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
