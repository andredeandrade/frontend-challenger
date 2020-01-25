import request from '@/api/request'

export default {
    /**
     * Retorna todos os usuarios.
     *
     * @returns {Promise<any>}
    */
    async getUsers () {
        return (await request.get('/person')).data
    },
    /**
     * Retorna um usuario.
     * @param {String} id
     * @returns {Promise<any>}
    */
    async getUserById (id) {
        return (await request.get(`/person/${id}`)).data
    },
    /**
     * Realiza o cadastro do usuario.
     *
     * @param {Object} userData
     * @returns {Promise<any>}
    */
    async addUser (userData) {
        return (await request.post(`/person`, userData)).data
    },
    /**
     * Edita um usuario.
     *
     * @param {String} id
     * @param {Object} userData
     * @returns {Promise<any>}
    */
    async editUser (id, userData) {
        return (await request.put(`/person/${id}`, userData)).data
    },
    /**
     * Remove um usuario.
     * @param {String} id
     * @returns {Promise<any>}
    */
    async deleteUser (id) {
        return (await request.delete(`/person/${id}`)).data
    }
}