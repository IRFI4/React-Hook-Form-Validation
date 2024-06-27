import { useForm } from 'react-hook-form'

const RegForm = () => {

    const { } = useForm({})
    return (
        <>
            <form>
                <h3 className='sign-up'>Sign up</h3>

                <div className='form-wrapper'>
                    <div className='input-wrapper'>
                        <label className='test'>User name</label>
                        <input type='text' placeholder='Ryan Gosling' />
                    </div>

                    <div className='input-wrapper'>
                        <label>Email</label>
                        <input type='email' placeholder='ryangosling@gmail.com' />
                    </div>

                    <div className='input-wrapper'>
                        <label>Phone number</label>
                        <input type='tel' placeholder='Enter your number' />
                    </div>

                    <div className='input-wrapper'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password' />
                    </div>

                </div>

                <button>Sign up</button>

            </form>
        </>
    )
}

export default RegForm