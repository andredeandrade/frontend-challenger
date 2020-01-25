<template>
   <div class="top-area-content">
        <div class="image">
            <div class="avatar">
                <img :src="user.avatar">
            </div>
            <div class="name-spotlight">
                <span>{{ user.name }}</span>
            </div>
        </div>
        <div class="buttons">
            <EditButton :userId="user.id" v-if="showEdit"/>
            <RemoveButton :userId="user.id" @change="goList" />
        </div>
    </div>
</template>

<script>
import EditButton from '@/components/Template/EditButton'
import RemoveButton from '@/components/Template/RemoveButton'

export default {
    props: {
        showEdit: {
            type: Boolean,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        goList() {
            this.$router.push('/')
        }
    },
    components: {
        EditButton,
        RemoveButton
    }
}
</script>

<style scoped>
    .top-area-content {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .top-area-content .image {
        display: flex;
        align-items: center;
    }
    .top-area-content .image .avatar {
        margin-right: 25px;
    }
    .top-area-content .image .avatar img {
        border-radius: 50%;
    }
    .top-area-content .image .name-spotlight {
        color: #DA3E53;
        font-weight: 600;
        font-size: 20px;
    }
    .top-area-content .buttons {
        display: flex;
        align-items: center;
        height: 20px;
    }
</style>