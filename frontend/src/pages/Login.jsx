import { useState } from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const submit = async (e)=>{
    e.preventDefault()
    try{
      // simple register/login placeholder using register endpoint for demo
      const res = await api.post('auth/register/', { username, password, is_instructor: false })
      localStorage.setItem('username', username)
      localStorage.setItem('user_id', res.data.id)
      navigate('/courses')
    }catch(err){ alert('Login/Register failed') }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Welcome back</h2>
        <form onSubmit={submit}>
          <input className="w-full p-3 border rounded mb-3" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
          <input className="w-full p-3 border rounded mb-3" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full bg-indigo-600 text-white py-2 rounded">Sign in / Register</button>
        </form>
      </div>
    </div>
  )
}
