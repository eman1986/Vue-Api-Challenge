<template>
    <div>
        <div>
            <label for="FirstName">First Name</label>
            <input @input="FirstName" type="text" id="FirstName">
        </div>
        <div>
            <label for="LastName">Last Name</label>
            <input @input="LastName" type="text" id="LastName">
        </div>
        <div>
            <button @click="sendForm()">Create User</button>
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
                }
            }
        }
    };
</script>