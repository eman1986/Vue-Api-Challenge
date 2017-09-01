<template>
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Project List
        </div>
        <project-table />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
    import userTable from '../components/UserTable.vue'

    export default {
        name: 'users',
        components: {
            userTable
        },
        mounted: () => {
            this.$store.dispatch('GetUsers')
        }
    };
</script>