export default (expenses) => {
    if (!expenses) {
        return 0;
    }
    const reducer = (sum, value) => sum + value;
    return expenses.map((expense) => expense.amount).reduce(reducer, 0);
};