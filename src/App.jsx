
import './App.css'
import Cards from './Componant/Cards/Cards'
import Carts from './Componant/Carts/Carts'

function App() {
  

  return (
    <>
      <h1 className='text-4xl mb-6 py-5 font-bold text-center'>Course Registration</h1>
     
     <div className='md:flex pl-20'>
      <Cards></Cards>
      <Carts></Carts>
     </div>
     
      
     
    </>
  )
}

export default App
