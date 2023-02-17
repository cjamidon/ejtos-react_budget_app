import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch} = useContext(AppContext);

    const updateCurrency = (value) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });

    }
    
    return (
        <div className='alert alert-secondary' style={{ marginLeft: '2rem', backgroundColor: 'lightgreen'}}>
            <label for="currency">Currency: </label> 
            <select
                    required='required'
                    type='number'
                    id='budget'
                    style={{ marginLeft: '2rem' , size: 10, backgroundColor: 'lightgreen'}}
                    onChange={(event) => updateCurrency(event.target.value)}
                    >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;