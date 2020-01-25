<template>
  <div class="content">
    <Top mainTitle="Novo perfil" :showAddButton="showAddButton" :showArrow="showArrow" />
    <div class="container">
        <Form />
    </div>
  </div>
</template>

<script>
import Top from '@/components/Template/Top'
import Form from '@/components/Comuns/Form'

export default {
    data: () => ({
        showAddButton: false,
        showArrow: true
    }),
    components: {
        Top,
        Form
    }
}
</script>

<style>

</style>