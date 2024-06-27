import * as yup from 'yup'

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/)
const regExpPhone = new RegExp(/^\+?[1-9][0-9]{7,14}$/)

export const schema = yup.object().shape({
    username: yup.string().trim().required('This field is required').min(2, 'Field must have 2 symbols at least'),
    email: yup.string().required('This field is required').matches(regExpEmail, 'Wrong email format'),
    phone: yup.string().required('This field is required').matches(regExpPhone, 'Wrong phone format'),
    password: yup.string().required('This field is required').min(6, 'Field must have 6 symbols at least')
})