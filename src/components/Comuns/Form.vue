<template>
  <div class="form-area">
        <div class="input-area">
            <span>Nome: </span>
            <input type="text" v-model="name" />
        </div>
        <div class="input-area">
            <span>Email: </span>
            <input type="text" v-model="email"/>
        </div>
        <div class="button-save-area">
            <span @click="save" class="button-save">
                Salvar
            </span>
        </div>
    </div>
</template>

<script>
import api from '@/api'

export default {
    data: () => ({
        name: null,
        email: null
    }),
    props: {
        user: {
            type: Object,
            required: false
        }
    },
    mounted () {
        if(this.user) {
            this.name = this.user.name
            this.email = this.user.email
        }
    },
    methods: {
        async save() {
            const user = {
                name: this.name,
                email: this.email
            }
            if (this.user) {
                try {
                    await api.editUser(this.user.id, user)
                    this.$emit('change')
                } catch (error) {
                    // previne error
                }
                return 
            }
            try {
                const { id } = await api.addUser(user)
                this.$router.push(`/detail/${id}`)
            } catch (error) {
                // previne error
            }
        }
    }
}
</script>

<style scoped>
    .form-area .input-area {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }
    .form-area .input-area span{
        display: block;
        margin-bottom: 10px;
        color: #4F4F4F;
    }
    .form-area .input-area input {
        border-radius: 20px;
        width: 40%;
        height: 25px;
        border: 1px solid #4F4F4F;
        outline: 0;
        padding-left: 15px;
        box-sizing: border-box;
    }
    .form-area .button-save-area {
        display: flex;
        justify-content: center;
        margin-top: 35px;
    }
    .form-area .button-save-area .button-save {
        background-color: #DA3E53;
        color: #FFF;
        border-radius: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 27px;
        cursor: pointer;
    }
</style>