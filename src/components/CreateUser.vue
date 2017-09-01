<template>
    <div>
        <button type="button" class="button" @click="addProject()">Add New Project</button>
    </div>
</template>

<script>
    export default {
        name: 'createUser',
        methods: {
            addProject () {
                this.$store.dispatch('CreateUser', this.user);
            }
        }
    }
</script>