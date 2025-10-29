import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'

export default function Courses(){
  const [courses, setCourses] = useState([])
  useEffect(()=>{ api.get('courses/').then(r=>setCourses(r.data)).catch(()=>{}) },[])
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.length===0 && <div className="col-span-3 text-gray-500">No courses yet</div>}
        {courses.map(c=>(
          <Link to={'/course/'+c.id} key={c.id} className="p-4 bg-white rounded shadow hover:shadow-lg">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
