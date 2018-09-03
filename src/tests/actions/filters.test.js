import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('should setup set start date action object ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should setup set end date action object ', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should setup set text filter with provided value', () => {
    const action = setTextFilter('Filter');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Filter'
    });
});

test('should setup set text filter with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should setup sort by amount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should setup sort by date action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});