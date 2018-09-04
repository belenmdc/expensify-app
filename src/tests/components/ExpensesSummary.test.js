import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={12345121}/>);
    expect(wrapper).toMatchSnapshot();
});