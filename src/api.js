import axios from 'axios';

/**
 * Get List of Users
 * @returns {AxiosPromise}
 */
function getUsers()
{
    return axios.get('https://dev-server.local.com:5000/api/User/GetAll');
}

/**
 * Get User By Id
 * @param {string} id
 * @returns {AxiosPromise}
 */
function getUserById(id)
{
    return axios.get(`https://dev-server.local.com:5000/api/User/Get/${id}`);
}

/**
 * Create a User
 * @param {object} user
 * @returns {AxiosPromise}
 */
function createUser(user)
{
    return axios.post('https://dev-server.local.com:5000/api/User/Insert', user);
}

/**
 * Update User Information
 * @param {object} user
 * @returns {AxiosPromise}
 */
function saveUser(user)
{
    return axios.post('https://dev-server.local.com:5000/api/User/Save', user);
}

/**
 * Delete User
 * @param {string} id
 * @returns {AxiosPromise}
 */
function deleteUser(id)
{
    return axios.get(`https://dev-server.local.com:5000/api/User/Delete/${id}`);
}

export { getUsers, getUserById, createUser, saveUser, deleteUser };