import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='flex justify-between container mx-auto gap-3'>
        <Courses></Courses>
        <CourseCart></CourseCart>
      </div>
    </>
  )
}

export default App
