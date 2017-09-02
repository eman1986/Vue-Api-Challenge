<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                Create User
            </p>
            <p class="subtitle">
                Creating New User
            </p>
            <div class="field">
                <label for="FirstName" class="label">First Name</label>
                <div class="control">
                    <input @input="FirstName" type="text" id="FirstName" class="input" />
                </div>
            </div>
            <div class="field">
                <label for="LastName" class="label">Last Name</label>
                <div class="control">
                    <input @input="LastName" type="text" id="LastName" class="input" />
                </div>
            </div>
            <div class="control">
                <button @click="sendForm()" class="button is-primary">Create User</button>
                &nbsp;
                <router-link :to="{ name: 'Home' }" class="button is-danger">Cancel</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                FirstName: '',
                LastName: ''
            };
        },
        methods: {
            sendForm(e) {
                if(this.ProjectName.length > 0 && this.ProjectType.length > 0) {
                    const projectName = this.ProjectName;
                    const projectType = this.ProjectType;

                    this.$store.dispatch('CreateUser', e.target.value);

                    this.ProjectName = '';
                    this.ProjectType = '';

                    this.$route.router.go('/'); // on success only.
                }
            }
        }
    };
</script>