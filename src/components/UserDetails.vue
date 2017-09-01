<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                {{ user.user.firstName  }}
            </p>
            <p class="subtitle">
                Jeff Atwood
            </p>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
            </p>
            <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
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