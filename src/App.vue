<template>
    <div id="app">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Create' }">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'app'
    };
</script>