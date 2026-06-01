import React from 'react'
import api from '../api/axios.js'
import { useState, useEffect } from 'react'

const Home = () => {
    const [longUrl, setlongUrl] = useState('')
    const [shortUrl, setshortUrl] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [copy, setcopy] = useState(false)

    useEffect(() => {
        setError('')
        setshortUrl('')
    }, [longUrl])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setshortUrl('')
        try {
            if(!longUrl.trim()){
                setError('Enter a URL first!')
                setLoading(false)
                return
            }
            const response = await api.post('/url/create', { url: longUrl })
            setshortUrl(response.data.data.shortUrl)
            setLoading(false)
            console.log(response.data);
        } catch (error) {
            console.log(error);
            console.log(error.response);
            
            setError(error.response.data.message)
            setLoading(false)
        }
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(shortUrl)
        setcopy(true)
        setTimeout(() => {
            setcopy(false)
        }, 2000);
    }

    return (
        
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-500'>
            <nav className='bg-black font-bold gap-40 text-blue-500 mb-20 w-230 h-15 rounded-2xl px-15 py-8 flex items-center'>
                <span className='hover:cursor-pointer'>URL Shortener</span>
                <span className='hover:cursor-pointer'>MyUrls</span>
                <span className='hover:cursor-pointer'>Profile</span>
                <span className='hover:cursor-pointer'>Logout</span>   
            </nav>
            <div className=' bg-black p-4 py-6 border rounded-2xl flex flex-col items-center w-150 gap-4'>
                <h1 className='text-3xl font-bold mb-4 text-blue-500'>Url Shortner</h1>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <input value={longUrl} onChange={e => setlongUrl(e.target.value)} type="text" className=' bg-white border p-2 rounded-lg w-full' placeholder='https://example.com/sjdfgbsa/ergergerg' />
                    {error && <div className='bg-red-400 text-white p-2 mt-2 rounded flex justify-center'>
                        {error}
                    </div>}
                    <button onClick={handleSubmit} disabled={loading} 
                        className={`${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'} text-white px-1 py-2 rounded-lg w-full`}>
                        {!loading ? 'Shorten' : 'Shortening'}</button>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-4 mt-4'>
                    {shortUrl && (
                        <div className='w-full flex flex-col items-center justify-center'>
                            <h2 className='font-bold text-blue-500 text-3xl mb-2'>Short Url</h2>
                            <div className='w-full flex flex-row items-center justify-center mt-2'>
                                <input type="text" className=' bg-white outline-0 border p-2 rounded-l-lg w-full' placeholder='https://example.com/sjdfgbsa/ergergerg' value={shortUrl} readOnly />
                                <button onClick={copyHandler} className={`${copy ? 'bg-green-400 border-green-500' : 'bg-blue-500 border-blue-500'} border text-white py-2 rounded-r-lg px-2`}>{ !copy ? 'Copy' : 'Copied'}</button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Home