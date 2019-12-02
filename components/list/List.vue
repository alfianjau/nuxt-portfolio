<template>
  <div class="list ">
    <b-list-group>
      <b-list-group-item>
        <ListItem
      v-for="entity in entities"
      :key="entity.id"
      :item-type="source"
      :data="entity"
        />
        </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
import ListItem from '@/components/list/items/ListItem'
import { BListGroup, BListGroupItem } from 'bootstrap-vue'
export default {
  name: 'List',
  components: {
    ListItem,
    BListGroup,
    BListGroupItem
  },
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
          this.entities = res.data
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
          this.entities = res.data
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
  max-height: 550px;
  overflow: auto;
}
</style>
