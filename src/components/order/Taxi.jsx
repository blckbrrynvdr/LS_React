import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NearMeTwoToneIcon from '@material-ui/icons/NearMeTwoTone';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import GoogleInput from '../input/GoogleInput';
import { getRoutes } from '../../store/actions/route';

import { useForm } from 'react-hook-form';


const useStyles = makeStyles({
    root: {
        position: 'absolute',
        display: 'block',
        padding: '20px',
        top: '59px',
        left: '68px',
        zIndex: '1',
        backgroundColor: '#FFF',
        boxShadow: '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    },
    inputRow: {
        marginBottom: '15px',
    },
    btn: {
      marginTop: "20px",
    }
});


export const Taxi = (props) => {
    const classes = useStyles();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const initialAddresses = props.addresses.reduce((acc, current, index) => {
      return [...acc, {id: index, value: current}]
    },[]);

    const [fromAddresses, setFromAddresses] = useState(initialAddresses);
    const [toAddresses, setToAddresses] = useState(initialAddresses);

    const handleChange = (e) => {
      const { value, name } = e.target;
      
      if (name === 'rideFrom') {
        setToAddresses(initialAddresses.filter(elem => elem.value !== value));
      }
      if (name === 'rideTo') {
        setFromAddresses(initialAddresses.filter(elem => elem.value !== value));
      }
    }

    const handleClear = function (name)  {
      setValue(name, '', { shouldDirty: true });
      setToAddresses(initialAddresses);
    }

    const submitHandler = async function (data) {
      const { rideFrom, rideTo } = data;
      
      if (initialAddresses.find(elem => elem.value === rideFrom)
        && initialAddresses.find(elem => elem.value ===  rideTo)
      ) {
        props.getRoutes(rideFrom, rideTo);
      }
    }

    return(
        <div className={classes.root}>
            <form action="" className="taxi-order__form" onSubmit={handleSubmit(submitHandler)}>
                <div className={classes.inputRow}>
                  <GoogleInput
                    startIcon={<FiberManualRecordIcon />}
                    placeholder="Откуда поедете?"
                    addresses={fromAddresses}
                    changeHandler={handleChange}
                    clear={handleClear}
                    name="rideFrom"
                    {...register("rideFrom", {
                      required: 'Обязательное поле',
                    })}
                    error={!!errors.rideFrom}
                    helperText={errors.rideFrom && errors.rideFrom.message}
                  />
                </div>
                <div className={classes.inputRow}>
                  <GoogleInput
                    startIcon={<NearMeTwoToneIcon />} 
                    placeholder="Куда поедете?"
                    addresses={toAddresses}
                    changeHandler={handleChange}
                    clear={handleClear}
                    name="rideTo"
                    {...register("rideTo", {
                      required: 'Обязательное поле',
                    })}
                    error={!!errors.rideTo}
                    helperText={errors.rideTo && errors.rideTo.message}
                  />
                </div>
                <Button className={`button-common auth-form__button ${classes.btn}`} color="primary" type="submit" data-testid="submitButton">Заказать</Button>

            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
  addresses: state.addresses.addresses,
  routes: state.routes.routes,
});

export default connect(
  mapStateToProps,
  { getRoutes }
)(Taxi);
