export const SetUsers = (state, users) => {
    state.users = users;
};

export const SetUserDetails = (state, user) => {
    state.userDetails = user;
};

export const AddUser = (state, user) => {
    state.users.push(user);
};

export const UpdateUser = (state, user) => {
    const index = state.users.findIndex(q => q.id === user.id);

    state.users[index] = user;
};

export const RemoveUser = (state, userId) => {
    const index = state.users.findIndex(q => q.id === userId);
    state.users.slice(index, 1);
};