import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactions } from '../../features/transaction/transactionSlice';
import Transaction from '../Transactions/Transaction';
import FilterExpense from '../AllTransaction/FilterExpense.js'
import Search from '../../features/transaction/Search';
import Balance from '../Balance';
import Form from '../Form';
import Transactions from '../Transactions/Transactions';
import Pagination from './Pagination';

export default function AllTransaction() {
    const dispatch = useDispatch();
    const { type ,search,page} = useSelector( (state) => state.Filter);
    const { transactions, isLoading, isError } = useSelector(
        (state) => state.transaction
    );

    useEffect(() => {
        dispatch(fetchAllTransactions({type ,search,page}));
    }, [dispatch,type,search,page]);


    return (
        <div>
             <Balance />
            <Form />
            <Search></Search>
            <FilterExpense/>
            {transactions?.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
            <Pagination></Pagination>
        </div>
    )
}
