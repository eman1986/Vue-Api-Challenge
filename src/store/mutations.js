export const SetUsers = (state, users) => {
    state.users = users;
};

export const SetUserDetails = (state, user) => {
    state.userDetails = user;
};

export const AddUser = (state, user) => {
    state.users.push(user);
};