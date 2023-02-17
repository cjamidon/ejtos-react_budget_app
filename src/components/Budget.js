
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const updateBudget = (value) => {

        if(value > 20000){
            alert("Cannot set budget over 20000");
            return;
        }else if(value < totalExpenses){
            alert("Cannot set budget lower than spending");
            return;
        } 

        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }

    }
    
    return (
        <div className='alert alert-secondary' 
        style={{ width: "22rem"}}>
            <span>Budget: {currency}
            <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => updateBudget(event.target.value)}
                    step="10">
                    </input>
            </span>
        </div>
    );
};
export default Budget;