<template>
    <div class="content">
        <Top mainTitle="Lista de pessoas" :showAddButton="showAddButton" :showArrow="showArrow" />
        <div class="container">
           <Users :users="users" @change="getUsers" />
        </div>
    </div>
</template>

<script>
import '@/style/style.css'
import api from '@/api'
import Top from '@/components/Template/Top'
import Users from '@/components/List/Users'

export default {
    data: () => ({
        showAddButton: true,
        showArrow: false,
        users: []
    }),
    mounted () {
        this.getUsers()   
    },
    methods: {
        async getUsers () {
            try {
                this.users = await api.getUsers()
            } catch (error) {
                // previne error
            }
        }
    },
    components: {
        Top,
        Users
    }
}
</script>

<style>
</style>