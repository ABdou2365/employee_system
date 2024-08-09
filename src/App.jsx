
import './App.css'
import FormAddUser from './components/FormAddUser'
import EmployeeList from './components/EmployeeList'
import { BrowserRouter,Route,Routes } from "react-router-dom";

import { NavigationMenuDemo } from './components/Heading'
import FormEditUser from './components/FormEditUser';

function App() {


  return (
    <>
      <NavigationMenuDemo />
      <BrowserRouter>
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<FormAddUser />} />
          <Route path="/editEmployee/:id" element={<FormEditUser  />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
