<template>
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Project List
        </div>
        <user-table />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
    import userTable from '../components/UserTable'

    export default {
        components: {
            userTable
        }
    };
</script>