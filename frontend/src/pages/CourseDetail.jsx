import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../utils/api'

export default function CourseDetail(){
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  useEffect(()=>{ api.get('courses/'+id+'/').then(r=>setCourse(r.data)).catch(()=>{}) },[id])
  if(!course) return <div className='p-4'>Loading...</div>
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <h2 className="text-xl font-semibold">Lessons</h2>
      <div className="mt-2 space-y-3">
        {course.lessons.map(l=>(
          <div key={l.id} className="p-3 bg-white rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{l.title}</h3>
              <p className="text-sm text-gray-600">{l.content.substring(0,120)}...</p>
            </div>
            <Link to={'/worksheet/'+(l.worksheets[0]?.id || '')} className="text-indigo-600">Open Worksheet</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
