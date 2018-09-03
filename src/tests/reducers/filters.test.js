import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' })
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE', sortBy: 'date' })
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test' })
    expect(state.text).toBe('test');
});

test('should set start date filter', () => {
    const startDate = moment()
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDate })
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment()
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endDate })
    expect(state.endDate).toBe(endDate);
});