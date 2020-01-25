<template>
  <div class="content">
       <Top mainTitle="Editar perfil" :showAddButton="showAddButton" :showArrow="showArrow" />
       <div class="container" v-if="user">
           <UserTop :user="user" :showEdit="showEdit" />
           <Form :user="user" @change="getUser"/>
       </div>
  </div>
</template>

<script>
import Top from '@/components/Template/Top'
import UserTop from '@/components/Comuns/UserTop'
import Form from '@/components/Comuns/Form'
import api from '@/api'

export default {
    data: () => ({
        showAddButton: false,
        showArrow: true,
        showEdit: false,
        user: null
    }),
    props: {
        id: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        async getUser () {
            try {
                this.user = await api.getUserById(this.id) 
            } catch (error) {
                // previne error
            }
        }
    },
    components: {
        Top,
        UserTop,
        Form
    }
}
</script>

<style>

</style>