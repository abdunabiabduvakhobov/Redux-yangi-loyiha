
import axios from "./api"

const AuthService = {
    async userRegister(user) {
        const response = await axios.post('/users', {user})

        return response.data
    },
    async userLogin() {
        // const response = await axios.post('http://localhost:3000/api/users/login')

    },
    async getUser() {
        // const response = await axios.get('http://localhost:3000/api/user')
    },
  
}

export default AuthService