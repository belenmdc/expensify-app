import authReducer from '../../reducers/auth';

test('should set user uid on login', () => {
    const uid = 1234;
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should clear state on logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
});