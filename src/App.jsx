import { useEffect, useState } from 'react'
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [addedCourses, setAddedCourses] = useState([]);


  const handleAddCourse = (courses) => {
    const newAddedCourses = [...addedCourses, courses];
    setAddedCourses(newAddedCourses);
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between container mx-auto gap-3'>
        <Courses
          handleAddCourse={handleAddCourse}
        ></Courses>
        <CourseCart
          addedCourses={addedCourses}
        ></CourseCart>
      </div>
    </>
  )
}

export default App
