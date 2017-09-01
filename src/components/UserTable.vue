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
            <tr v-for="user in users">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.employeeId }}</td>
                <td>{{ user.department }}</td>
                <td>
                    <small>
                        <router-link :to="{ name: 'Details', params: { id: user.id } }">View</router-link>
                        <router-link :to="{ name: 'Edit', params: { id: user.id } }">Edit</router-link>
                        <a href="#">Delete</a>
                    </small>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                users: mapState({
                    messages: state => state.users.data
                })
            }
        },
        mounted: function() {
            this.$store.dispatch('GetUsers')
        }
    }
</script>