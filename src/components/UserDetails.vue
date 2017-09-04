<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                {{ user.firstName  }} {{ user.lastName  }}
            </p>
            <p class="subtitle">
                Department: {{ user.department  }}<br>
                EmployeeID: {{ user.employeeId  }}
            </p>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">
                <router-link :to="{ name: 'Edit', params: { id: user.id } }">Edit</router-link>
            </p>
            <p class="card-footer-item">
                <a href="#" v-on:click.prevent="deleteUser(user.id)" class="has-text-danger">Delete</a>
            </p>
        </footer>
    </div>
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            user: state => state.userDetails
        }),
        created:  function() {
            this.$store.dispatch('GetUserById', this.$route.params.id)
        },
        methods: {
            deleteUser(id)
            {
                const store = this.$store;
                const router = this.$router;

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

                    router.replace('/');
                });
            }
        }
    }
</script>