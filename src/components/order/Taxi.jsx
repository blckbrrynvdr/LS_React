import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NearMeTwoToneIcon from '@material-ui/icons/NearMeTwoTone';
import { makeStyles } from "@material-ui/core/styles";

import { useState } from 'react';

import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import GoogleInput from '../input/GoogleMaps';


import './Taxi.css';

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
   
    // useEffect(() => {
    //   props.getAddressList();
    // }, [])

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

    return(
        <div className={classes.root}>
            <form action="" className="taxi-order__form">
                <div className={classes.inputRow}>
                  <GoogleInput
                    startIcon={<FiberManualRecordIcon />}
                    placeholder="Откуда поедете?"
                    addresses={fromAddresses}
                    // addresses={addresses}
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
                    // addresses={addresses}
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
  addresses: state.addresses.addresses
})

export default connect(
  mapStateToProps
)(Taxi);
