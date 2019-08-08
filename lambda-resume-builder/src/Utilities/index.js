import axios from 'axios'
import Cookies from 'js-cookie'

export default () => {
    const token = Cookies.get('token')

    return axios.create({
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
}

export const handleError = err => console.error({
    status: err.response && err.response.status,
    message: err.response && err.response.data.errors[0].message
})
