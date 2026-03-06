import './App.css'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<ListEmployeeComponent />}></Route>
          <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
          <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
