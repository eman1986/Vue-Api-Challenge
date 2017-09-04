<template>
    <div>
        <table class="table is-bordered is-striped is-fullwidth">
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
                <td class="has-text-centered">
                    <small>
                        <router-link :to="{ name: 'Details', params: { id: user.id } }"><i class="fa fa-eye"></i></router-link>
                        <router-link :to="{ name: 'Edit', params: { id: user.id } }"><i class="fa fa-pencil"></i></router-link>
                        <a href="#" v-on:click.prevent="deleteUser(user.id)"><i class="fa fa-trash"></i></a>
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
        computed: mapState({
            users: state => state.users
        }),
        created: function() {
            this.$store.dispatch('GetUsers');
        },
        methods: {
            deleteUser(id)
            {
                const store = this.$store;

                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(function () {
                    store.dispatch('DeleteUser', id);
                });
            }
        }
    }
</script>