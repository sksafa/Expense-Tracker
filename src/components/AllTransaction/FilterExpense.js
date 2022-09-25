import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { typeFilter } from '../../features/FilterSlice';

export default function FilterExpense() {
    const dispatch = useDispatch();

    const onChangeValue=(event)=> {
        dispatch(typeFilter(event.target.value));
    }

    return (
        <div style={{ display: 'flex' }} onChange={onChangeValue}>

            <input type="radio" id="Expense" name="type" value="expense" />
            <label htmlFor="Expense">Expense</label>

            <input className="ml-2"  type="radio" id="Income" name="type" value="income"  style={{ marginLeft: '10px' }} />
            <label htmlFor="Income">Income</label><br />

        </div>
    )
}
