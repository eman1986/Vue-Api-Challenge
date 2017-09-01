export const mutations = {
    SetUsers: (state, { users }) => {
        state.users = users
    },
    AddUser: (state, user) => {
        state.users.push(user);
    }
};