<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th class="has-text-centered"><i class="fa fa-cogs"></i></th>
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
                        <router-link :to="{ name: 'Details', params: { id: user.id } }"><i class="fa fa-eye"></i></router-link>
                        <router-link :to="{ name: 'Edit', params: { id: user.id } }"><i class="fa fa-pencil"></i></router-link>
                        <a href="#"><i class="fa fa-trash"></i></a>
                    </small>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    export default {
        computed: {
            users: function() {
                return this.$store.getters.getUsers;
            }
        },
        mounted: function() {
            this.$store.dispatch('GetUsers');
        }
    }
</script>