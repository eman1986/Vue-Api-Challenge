import * as api from '../api';
import swal from 'sweetalert2';

export const actions = {
    GetUsers: (context) => {
        api.getUsers()
            .then((resp) => {
                context.commit('SetUsers', { users: resp });
            })
            .catch((error) => {
                swal('Oops...', "Couldn't Load User List", 'error');
                console.log(error);
            });
    },
    CreateUser: (context, user) => {
        api.createUser(user)
            .then((resp) => {
                context.commit('AddUser', { user: store.state.formValues });
            })
            .catch((error) => {
                swal('Oops...', 'Failed to create user', 'error');
                console.log(error);
            });
    }
};