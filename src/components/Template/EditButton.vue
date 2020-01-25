<template>
  <i @click="goEdit" class="fas fa-edit"></i>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  methods: {
      goEdit() {
          this.$router.push(`/edit/${this.userId}`)
      }
  },
}
</script>

<style scoped>
    i {
        font-size: 13px;
        font-weight: 400;
        color: #DA3E53;
        margin-right: 10px;
        cursor: pointer;
        z-index: 10;
    }
</style>