import { Link } from 'react-router-dom'
export default function Navbar(){
  const username = localStorage.getItem('username')
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">EduVerse</Link>
        <div className="space-x-4">
          <Link to="/courses" className="text-gray-700 hover:text-indigo-600">Courses</Link>
          {username ? (
            <span className="text-sm text-gray-600">Hello, {username}</span>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-indigo-600">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
