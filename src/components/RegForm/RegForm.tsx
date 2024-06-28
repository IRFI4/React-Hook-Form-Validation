import { useForm } from 'react-hook-form'
import { RegisterInterface } from './types'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

const RegForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
    })

    const submitForm = (data: RegisterInterface): void => {
        // Write your sending data logic here
        console.log({ data })
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <h3 className='sign-up'>Sign up</h3>

                <div className='form-wrapper'>
                    <div className='input-wrapper'>
                        <label className='test'>User name</label>
                        <input {...register('username')} type='text' placeholder='Ryan Gosling' />
                        <p className='error'>{errors.username?.message}</p>
                    </div>

                    <div className='input-wrapper'>
                        <label>Email</label>
                        <input {...register('email')} type='email' placeholder='ryangosling@gmail.com' />
                        <p className='error'>{errors.email?.message}</p>
                    </div>

                    <div className='input-wrapper'>
                        <label>Phone number</label>
                        <input {...register('phone')} type='tel' placeholder='Enter your number' />
                        <p className='error'>{errors.phone?.message}</p>
                    </div>

                    <div className='input-wrapper'>
                        <label>Password</label>
                        <input {...register('password')} type='password' placeholder='Enter your password' />
                        <p className='error'>{errors.password?.message}</p>
                    </div>

                </div>

                <button>Sign up</button>

            </form>
        </>
    )
}

export default RegForm