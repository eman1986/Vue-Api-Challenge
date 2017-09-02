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
                <a href="#" class="has-text-danger">Delete</a>
            </p>
        </footer>
    </div>
</template>

<script type="text/javascript">
    export default {
        computed: {
            user: function() {
                return this.$store.getters.getUserDetails;
            }
        },
        mounted:  function() {
            this.$store.dispatch('GetUserById', this.$route.params.id)
        }
    }
</script>