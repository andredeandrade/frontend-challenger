<template>
    <ul>
        <li @dblclick="goDetail(user.id)" v-for="user in users" :key="user.id">
            <span class="name">{{ user.name }}</span>
            <span class="email">{{ user.email }}</span>
            <div class="buttons">
                <EditButton :userId="user.id" />
                <RemoveButton :userId="user.id" @change="onChange" />
            </div>
        </li>
    </ul>
</template>

<script>
import EditButton from '@/components/Template/EditButton'
import RemoveButton from '@/components/Template/RemoveButton'

export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        onChange () {
            this.$emit('change')
        },
        goDetail(id) {
            this.$router.push(`detail/${id}`)
        }
    },
    components: {
        EditButton,
        RemoveButton
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #847979;
        height: 30px;
        cursor: pointer;
    }
    li:nth-child(odd) {
        background-color: #F5F5F5;
    }
    li span {
        display: flex;
    }
    li .name {  
        width: 40%;
        justify-content: flex-start;
    }
    li .email {  
        width: 40%;
        justify-content: flex-end;
    }
    li .buttons {
        display: flex;
        align-items: center;
    }
</style>