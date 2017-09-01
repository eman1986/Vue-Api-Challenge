import axios from 'axios';

/**
 * Get List of Users
 * @returns {AxiosPromise}
 */
function getUsers()
{
    return axios.get('http://localhost/api/User/GetAll');
}

/**
 * Get User By Id
 * @param {string} id
 * @returns {AxiosPromise}
 */
function getUserById(id)
{
    return axios.get(`http://localhost/api/User/Get/${id}`);
}

/**
 * Create a User
 * @param {object} user
 * @returns {AxiosPromise}
 */
function createUser(user)
{
    return axios.post('http://localhost/api/User/Insert', user);
}

/**
 * Update User Information
 * @param {object} user
 * @returns {AxiosPromise}
 */
function saveUser(user)
{
    return axios.post('http://localhost/api/User/Save', user);
}

/**
 * Delete User
 * @param {string} id
 * @returns {AxiosPromise}
 */
function deleteUser(id)
{
    return axios.get(`http://localhost/api/User/Delete/${id}`);
}

export { getUsers, getUserById, createUser, saveUser, deleteUser };