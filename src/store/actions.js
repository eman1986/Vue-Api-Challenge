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
        .then(() => {
            context.dispatch('GetUsers');
            swal('Success!', 'User Created Successfully', 'success');
        })
        .catch((error) => {
            swal('Oops...', 'Failed to create user', 'error');
            console.log(error);
        });
};

export const SaveUser = (context, user) => {
    api.saveUser(user)
        .then(() => {
            context.dispatch('GetUsers');
            swal('Success!', 'User Updated Successfully', 'success');
        })
        .catch((error) => {
            swal('Oops...', 'Failed to update user', 'error');
            console.log(error);
        });
};

export const DeleteUser = (context, userId) => {
    api.deleteUser(userId)
        .then(() => {
            context.dispatch('GetUsers');
            swal('Success!', 'User Deleted Successfully', 'success');
        })
        .catch((error) => {
            swal('Oops...', 'Failed to delete user', 'error');
            console.log(error);
        });
};