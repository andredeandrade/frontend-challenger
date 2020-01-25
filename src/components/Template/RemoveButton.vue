<template>
  <div>
      <i @click="showModal" class="far fa-trash-alt"></i>
      <ConfirmModal v-on:confirmed="deleteUser" @onChange="onChange" />
  </div>
</template>

<script>
import ConfirmModal from '@/components/Comuns/ConfirmModal'
import api from '@/api'

export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  methods: {
    onChange () {
      this.$emit('change')
    },
    showModal () {
      this.$modal.show('confirmDelete')
    },
    async deleteUser () {
      try {
        await api.deleteUser(this.userId)
        this.$emit('change')
      } catch (error) {
        // previne erro
      }
    }
  },
  components: {
    ConfirmModal
  }
}
</script>

<style scoped>
    i {
        font-size: 13px;
        font-weight: 400;
        color: #DA3E53;
        cursor: pointer;
    }
</style>