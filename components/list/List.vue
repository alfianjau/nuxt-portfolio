<template>
  <div class="list col-md-6 rounded">I'm a {{ source }} list</div>
</template>
<script>
export default {
  name: 'List',
  props: {
    source: {
      type: String,
      default: 'users'
    }
  },
  data() {
    return {
      entities: []
    }
  },
  mounted() {
    switch (this.source) {
      default:
      case 'users':
        this.loadUsers()
        break
      case 'comments':
        this.loadComments()
        break
    }
  },
  methods: {
    loadUsers() {
      this.$store
        .dispatch('GET_USERS')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log('API error')
          console.log(err)
        })
    },
    loadComments() {
      this.$store
        .dispatch('GET_COMMENTS')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log('API error')
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
$background: #eff8ff;
.list {
  background: $background;
}
</style>
