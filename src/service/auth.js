
import { data } from "react-router"
import axios from "./api"

const AuthService = {
    async userRegister(user) {
        const {data} = await axios.post('/users', {user})
        return data
    },
    async userLogin() {
        const {data} = await axios.post('/users/login', {user})
        return data 

    },
    async getUser() {
        // const response = await axios.get('http://localhost:3000/api/user')
    },
  
}

export default AuthService