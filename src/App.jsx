import { useState } from 'react'
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [addedCourses, setAddedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20)
  const [totalCredit, setTotalCredit] = useState(0);
  const [price, setPrice] = useState(0)


  const handleAddCourse = (courses) => {
    const isExist = addedCourses.find(item => item.id === courses.id);
    let count = courses.credit;
    if (isExist) {
      toast.error("This Course Already Exists")
    }
    else {
      addedCourses.forEach(item => {
        count = count + item.credit;
      })
      const totalRemaining = 20 - count;
      if (count > 20) {
        toast.error("Cant Exceed More Than 20 hr Credit")
      }
      else {
        setTotalCredit(count);
        setPrice(price + courses.price);
        setRemaining(totalRemaining);
        setAddedCourses([...addedCourses, courses]);
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between container mx-auto gap-3'>
        <Toaster></Toaster>
        <Courses
          handleAddCourse={handleAddCourse}
        ></Courses>
        <CourseCart
          price={price}
          remaining={remaining}
          totalCredit={totalCredit}
          addedCourses={addedCourses}
        ></CourseCart>
      </div>
    </>
  )
}

export default App
