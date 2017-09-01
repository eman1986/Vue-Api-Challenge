export const SetUsers = (state, { users }) => {
    state.users = users
};
export const AddUser = (state, user) => {
    state.users.push(user);
};