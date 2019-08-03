import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import axioken from '../Utilities/axioken'

const SUCCESS = 'SUCCESS',
	GETJOBS = 'GETJOBS'

const url = 'https://lambda-crp.herokuapp.com/graphql'

const register = user => dispatch => {
	axios.post(url, {
		query: `
      mutation{
        createUser(userInput: {
          email:"${user.email}",
          password:"${user.password}",
          role: "${user.role}"
        }){
          _id
          token
          tokenExp
        }
	  }
	  `
	})
		.then(res => {
			console.log('REGISTERED', res)
			const token = res.data.data.createUser.token
			Cookies.set('token', token)
			dispatch({ type: SUCCESS, payload: res.data })
			if (token) {
				window.location.pathname = '/dashboard/profile'
			}
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))
}

const login = creds => dispatch => {
	axios.post(url, {
		query: `
      query{
        login(email:"${creds.email}", password:"${creds.password}"){
          token
        }
	  }
	  `
	})
		.then(res => {
			console.log('second response', res)
			const { token } = res.data.data.login
			Cookies.set('token', token)
			Cookies.set('creds', JSON.stringify(creds))
			const admin = jwt_decode(token)
			console.log('admin', admin)
			dispatch({ type: SUCCESS, payload: token })
			if (token) {
				window.location.pathname = '/dashboard/profile'
			}
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))
}

const createGoogleUser = google => dispatch => {
	axios.post(url, {
		query: `
      mutation{
        createGoogleUser(googleData: {
          token: "${google.token}", 
          image: "${google.image}", 
          email: "${google.email}", 
          name: "${google.name}", 
          password: "${google.password}"
        }){
          _id
          token
          tokenExp
        }
	  }
	  `
	})
		.then(res => {
			console.log('second response', res)
			const { token } = res.data.data.createGoogleUser
			Cookies.set('token', token)
			dispatch({ type: SUCCESS, payload: token })
			if (token) {
				window.location.pathname = '/dashboard/profile'
			}
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))
}

const getJobs = () => dispatch => {

	axioken().post(url, {
		query: `
        {
          jobs{
			_id
            company
            position
            location
            applied
            interview
            offer
          }
        }
        `
	})
		.then(res => dispatch({ type: GETJOBS, payload: res.data.data.jobs }))
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))

}

const addJob = job => dispatch => {

	axioken().post(url, {
		query: `
        mutation{
          addJob(jobInput: {
            company: "${job.company}",
            position: "${job.position}",
            location: "${job.location}",
            applied: ${job.applied === 'Yes'},
            interview: ${job.interview === 'Yes'},
            offer: ${job.offer === 'Yes'}
          }){
            _id
          }
        }
        `
	})
		.then(() => getJobs())
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))

}

const updateJob = job => dispatch => {

	axioken().post(url, {
		query: `
		mutation{
			updateJob(upJob: {
				_id: "${job._id}",
				company: "${job.company}",
				position: "${job.position}",
				location: "${job.location}",
				applied: ${job.applied === 'Yes'},
				interview: ${job.interview === 'Yes'},
				offer: ${job.offer === 'Yes'}
			}){
				_id
			}
		}
		`
	})
		.then(res => {
			console.log(res.data.data.upJob)
			getJobs()
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))

}

export {
	SUCCESS,
	GETJOBS,
	register,
	login,
	createGoogleUser,
	getJobs,
	addJob,
	updateJob
}
