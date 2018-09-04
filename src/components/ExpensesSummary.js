import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ( { expenseCount, expensesTotal }) => {
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
        return (
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotal}</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses ? visibleExpenses.length : 0,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);