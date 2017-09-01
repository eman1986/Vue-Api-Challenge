<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.Id">
                <td>{{ user.FirstName }}</td>
                <td>{{ user.LastName }}</td>
                <td>{{ user.EmployeeId }}</td>
                <td>{{ user.Department }}</td>
                <td>
                    <small>
                        <router-link :to="{ name: 'Details', params: { id: user.Id } }">View</router-link>
                        <router-link :to="{ name: 'Edit', params: { id: user.Id } }">Edit</router-link>
                        <a href="#">Delete</a>
                    </small>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';

    export default {
        name: 'UserList',
        computed: mapState([
            'users'
        ])
    }
</script>