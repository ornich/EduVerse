import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg p-12 shadow-lg">
        <h1 className="text-4xl font-bold">Learn Anything — Build Skills</h1>
        <p className="mt-4 text-lg">Text-first courses, worksheets and grading — EduVerse.</p>
        <div className="mt-6">
          <Link to='/courses' className="bg-white text-indigo-600 px-4 py-2 rounded font-semibold">Browse Courses</Link>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Popular courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* placeholders */}
          <div className="p-4 bg-white rounded shadow">Course card</div>
          <div className="p-4 bg-white rounded shadow">Course card</div>
          <div className="p-4 bg-white rounded shadow">Course card</div>
        </div>
      </section>
    </div>
  )
}
