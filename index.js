const { default: axios } = require("axios")

const email = document.querySelector('input')
const message = document.querySelector('textarea')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    const payload = {
        email: email.value,
        message: message.value
    }
    // console.log(payload)
    axios.post('/api/endpoint', payload)
})