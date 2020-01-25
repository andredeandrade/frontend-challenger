<template>
  <div v-if="user" class="content">
        <Top :mainTitle="`Perfil de ${user.name.split(' ')[0]}`" :showAddButton="showAddButton" :showArrow="showArrow" />
        <div class="container">
           <UserTop :user="user" :showEdit="showEdit" />
            <div class="infos-area">
                <span>
                    Nome: {{ user.name }}
                </span>
                <span>
                    Email: {{ user.email }}
                </span>
                <span>
                    Data de cadastro: {{ user.createdAt | moment('DD/MM/YYYY') }}
                </span>
            </div>
        </div>
  </div>
</template>

<script>
import Top from '@/components/Template/Top'
import UserTop from '@/components/Comuns/UserTop'
import api from '@/api'

export default {
    data: () => ({
        showAddButton: true,
        showArrow: true,
        showEdit: true,
        user: null
    }),
    props: {
        id: {
            type: String,
            required: true
        }
    },
    async mounted() {
        try {
            this.user = await api.getUserById(this.id)
        } catch (error) {
            // previne error
        }
    },
    components: {
        Top,
        UserTop
    }
}
</script>

<style scoped>
    .infos-area span{
        display: block;
        color: #847979;
        margin-bottom: 5px;
    }
</style>