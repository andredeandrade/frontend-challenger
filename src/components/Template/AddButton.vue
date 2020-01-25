<template>
  <span @click="goAdd" class="button">
      <i class="fas fa-plus"></i>
        Adicionar Perfil
  </span>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    methods: {
        goAdd() {
            this.$router.push('/add')
        }
    }
}
</script>

<style scoped>
    .fa-plus {
        margin-right: 10px;
    }
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 30px;
        border-radius: 20px;
        background-color: #DA3E53;
        color: #FFF;
        font-size: 13px;
        cursor: pointer;
    }
</style>