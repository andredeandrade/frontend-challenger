<template>
  <modal name="confirmDelete" :width="383" height="auto">
    <div class="body-modal">
      <div class="text">
        <p>
          Tem certeza que você deseja excluir esse perfil?
        </p>
      </div>
      
      <div class="buttons">
        <span @click="confirmOption(true)" class="yes">
          Sim
        </span>
        <span @click="confirmOption()" class="no">
          Não
        </span>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    confirmOption(confirmed) {
      if(confirmed) {
        this.$emit('confirmed')
      }
      this.$modal.hide('confirmDelete')
    }
  }
}
</script>

<style>
  
</style>