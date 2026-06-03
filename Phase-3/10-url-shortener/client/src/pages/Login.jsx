import { useState } from 'react'
import api from '../api/axios.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const [step, setstep] = useState('form')
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        setloading(true)
        seterror('')
        setsuccess('')
        try {
            const response = await api.post('/auth/login', formData)
            setloading(false)
            console.log(response.data);
            if (response.data.success) {
                setsuccess(response.data.message)
                console.log(response.data.message);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            }
        } catch (error) {
            console.log(error);
            seterror(error.response.data.message)
            setloading(false)
        }
    }
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-500'>
            <div className=' p-6 border rounded-2xl flex flex-col items-center w-150 gap-5 bg-black'>
                <h1 className='font-medium text-3xl mb-3 text-white'>Login</h1>

                <div>
                    <form onChange={onChangeHandler}  className='flex flex-col items-center w-135'>
                        <input type="email" name='email' placeholder='Email' className='border bg-white p-2 rounded-lg mb-4 w-135' />
                        <input type="password" name='password' placeholder='Password' className='border bg-white p-2 rounded-lg w-full' />
                        if({error && <div className='bg-red-400 text-white p-2 w-fit rounded flex justify-center'>
                            {error}
                        </div>})
                        else{success && (
                            <div className="bg-green-500 text-white p-2 rounded mb-3 flex justify-center items-center w-fit">
                                {success}
                            </div>
                        )}
                        <p className='mb-4 text-white'>Don't have an account? <a className='text-blue-500' href="/register">Register</a></p>
                        <button type='submit' onClick={loginHandler} className='bg-blue-500 text-white p-2 rounded-lg hover:cursor-pointer w-full'>{!loading ? 'Login' : 'Please wait...'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login