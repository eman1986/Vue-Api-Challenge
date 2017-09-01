<template>
    <div id="app">
        <nav class="navbar">
            <div class="navbar-brand">
                <router-link :to="{ name: 'Home' }" class="navbar-item ">User Manager</router-link>
                <div class="navbar-burger burger" data-target="honeycombAppMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="honeycombAppMenu" class="navbar-menu">
                <div class="navbar-start">
                    <router-link :to="{ name: 'Home' }" class="navbar-item ">Home</router-link>
                    <router-link :to="{ name: 'Create' }" class="navbar-item ">Create User</router-link>
                </div>
            </div>
        </nav>
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-11">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>