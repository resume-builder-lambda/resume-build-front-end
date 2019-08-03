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
