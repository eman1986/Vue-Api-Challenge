import axios from 'axios';

const BASE_URI = 'https://dev-server.local.com:5000';

/**
 * Get List of Users
 * @returns {AxiosPromise}
 */
function getUsers()
{
    return axios.get(`${BASE_URI}/api/User/GetAll`);
}

/**
 * Get User By Id
 * @param {string} id
 * @returns {AxiosPromise}
 */
function getUserById(id)
{
    return axios.get(`${BASE_URI}/api/User/Get/${id}`);
}

/**
 * Create a User
 * @param {object} user
 * @returns {AxiosPromise}
 */
function createUser(user)
{
    return axios.post(`${BASE_URI}/api/User/Insert`, user);
}

/**
 * Update User Information
 * @param {object} user
 * @returns {AxiosPromise}
 */
function saveUser(user)
{
    return axios.post(`${BASE_URI}/api/User/Save`, user);
}

/**
 * Delete User
 * @param {string} id
 * @returns {AxiosPromise}
 */
function deleteUser(id)
{
    return axios.get(`${BASE_URI}/api/User/Delete/${id}`);
}

export { getUsers, getUserById, createUser, saveUser, deleteUser };