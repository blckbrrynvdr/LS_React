import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NearMeTwoToneIcon from '@material-ui/icons/NearMeTwoTone';
import { makeStyles } from "@material-ui/core/styles";

import { useState } from 'react';

import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import GoogleInput from '../input/GoogleMaps';

import { getRoutes } from '../../store/actions/route';


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
        marginBottom: '10px',
    }
});


export const Taxi = (props) => {
    const classes = useStyles();

    const initialAddresses = props.addresses.reduce((acc, current, index) => {
      return [...acc, {id: index, value: current}]
    },[]);

    const [fromAddresses, setFromAddresses] = useState(initialAddresses);
    const [toAddresses, setToAddresses] = useState(initialAddresses);
    const [rideFrom, setRideFrom] = useState('');
    const [rideTo, setRideTo] = useState('');

    const handleChange = (e) => {
      const { value, name } = e.target;
      
      if (name === 'rideFrom') {
        setRideFrom(value);
        setToAddresses(initialAddresses.filter(elem => elem.value !== value));
      }
      if (name === 'rideTo') {
        setRideTo(value);
        setFromAddresses(initialAddresses.filter(elem => elem.value !== value));
      }
    }

    const handleClear = function (name)  {
      
      if (name === 'rideFrom') {
        setRideFrom('');
        setToAddresses(initialAddresses);
      }
      if (name === 'rideTo') {
        setRideTo('');
        setFromAddresses(initialAddresses);
      }
    }

    const submitHandler = async function (event) {
      event.preventDefault();
      const { rideFrom, rideTo } = event.target;
      
      if (initialAddresses.find(elem => elem.value === rideFrom.value)
        && initialAddresses.find(elem => elem.value ===  rideTo.value)
      ) {
        props.getRoutes(rideFrom.value, rideTo.value);
      }
    }

    return(
        <div className={classes.root}>
            <form action="" className="taxi-order__form" onSubmit={submitHandler}>
                <div className={classes.inputRow}>
                  <GoogleInput
                    startIcon={<FiberManualRecordIcon />}
                    placeholder="Откуда поедете?"
                    addresses={fromAddresses}
                    changeHandler={handleChange}
                    clear={handleClear}
                    value={rideFrom}
                    name="rideFrom"
                  />
                </div>
                <div className={classes.inputRow}>
                  <GoogleInput
                    startIcon={<NearMeTwoToneIcon />} 
                    placeholder="Куда поедете?"
                    addresses={toAddresses}
                    changeHandler={handleChange}
                    clear={handleClear}
                    value={rideTo}
                    name="rideTo"
                  />
                </div>
                <Button className="button-common auth-form__button" color="primary" type="submit" data-testid="submitButton">Заказать</Button>

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
