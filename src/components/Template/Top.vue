<template>
  <div class="top-area">
      <div class="logo">
          <img src="../../assets/logo.jpg" alt="Logo">
      </div>
      <div class="flex-area-between">
        <div class="main-title">
           <h1>
                <router-link v-if="showArrow" to="/"><i class="fas fa-arrow-left"></i></router-link>
                {{ mainTitle }}
            </h1>
        </div>
        <div class="button-area">
            <AddButton v-if="showAddButton" />
        </div>
      </div>
  </div>
</template>

<script>
import AddButton from '@/components/Template/AddButton'

export default {
    props: {
        mainTitle: {
            type: String,
            required: true
        },
        showAddButton: {
            type: Boolean,
            required: true
        },
        showArrow: {
            type: Boolean,
            required: true
        }
    },
    components: {
        AddButton
    }
}
</script>

<style scoped>
    .top-area {
        width: 100%;
        height: 30%;
    }
    .logo {
        display: flex;
        justify-content: center;
    }
    .logo img {
        width: 145px;
        height: 120px;
    }
    h1 {
        color: #DA3E53;
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;
    }
    h1 i {
        margin-right: 5px;
    }
    h1 a {
        color: #DA3E53;
    }
    .flex-area-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        padding: 0 10px;
    }
</style>