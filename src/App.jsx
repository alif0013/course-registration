
import { useState } from 'react'
import './App.css'
import Cards from './Componant/Cards/Cards'
import Carts from './Componant/Carts/Carts'
import Swal from 'sweetalert2'


function App() {
  const [courses, setCourses] = useState([]);
  const [remaining, setremaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  const handCoursesBtn = course => {
    const isExist = courses.find((item) => item.id === course.id);

    let count = course.credit;

    if (isExist) {
      Swal.fire({
        title: 'You alredy selected this course. please try another course',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    else {

      courses.forEach((item) => {

        count = count + item.credit;

      });

      const totalRemaining = 20 - count;

      if (count > 20) {
        return  Swal.fire({
          title: 'you can not purchese over 20 credit hr',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }

      else {
        setTotalCredit(count);
        setremaining(totalRemaining)
        setCourses([...courses, course]);
      }

    }

  }

  return (
    <>
      <h1 className='text-4xl mb-6 py-5 font-bold text-center'>Course Registration</h1>

      <div className='md:flex pl-20'>
        <Cards handCoursesBtn={handCoursesBtn}></Cards>
        <Carts key={courses.id} courses={courses} remaining={remaining} totalCredit={totalCredit}></Carts>
      </div>

    </>
  )
}

export default App
