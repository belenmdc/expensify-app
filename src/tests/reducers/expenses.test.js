import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'Pizza',
        note: '',
        amount: 1500,
        createdAt: moment(0).add(5, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
})

test('should edit an expense', () => {
    const newNote = 'I\'m adding a note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: newNote
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(newNote);
})

test('should edit an expense', () => {
    const newNote = 'I\'m adding a note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note: newNote
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

