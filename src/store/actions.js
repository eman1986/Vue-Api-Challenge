import * as api from '../api';
import swal from 'sweetalert2';

export const GetUsers = (context) => {
    api.getUsers()
    .then((resp) => {
        context.commit('SetUsers', resp.data);
    })
    .catch((error) => {
        swal('Oops...', "Couldn't Load User List", 'error');
        console.log(error);
    });
};

export const GetUserById = (context, userId) => {
    api.getUserById(userId)
    .then((resp) => {
        context.commit('SetUserDetails', resp.data);
    })
    .catch((error) => {
        swal('Oops...', 'Failed to fetch user', 'error');
        console.log(error);
    });
};

export const CreateUser = (context, user) => {
    api.createUser(user)
    .then((resp) => {
        context.commit('AddUser', store.state.formValues);
    })
    .catch((error) => {
        swal('Oops...', 'Failed to create user', 'error');
        console.log(error);
    });
};