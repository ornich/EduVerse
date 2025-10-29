import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../utils/api'

export default function Worksheet(){
  const { id } = useParams()
  const [ws, setWs] = useState(null)
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{ api.get('worksheets/'+id+'/').then(r=>setWs(r.data)).catch(()=>{}) },[id])
  if(!ws) return <div className='p-4'>Loading...</div>
  const submit = async (e)=>{
    e.preventDefault()
    try{
      await api.post('submissions/', { worksheet: ws.id, student: localStorage.getItem('user_id')||1, answer_text: answer })
      navigate('/courses')
    }catch(err){ alert('Submit failed') }
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-2">Worksheet</h2>
      <p className="mb-4 text-gray-700">{ws.question_text}</p>
      <form onSubmit={submit}>
        <textarea value={answer} onChange={(e)=>setAnswer(e.target.value)} className="w-full p-3 border rounded" rows="8"></textarea>
        <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  )
}
