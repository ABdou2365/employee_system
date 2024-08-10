"use client"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EmployeeService from "../services/EmployeeService"

export default function FormEditUser() {


  const { id } = useParams()

  useEffect(() => {
    EmployeeService.getEmployeesById(id).then((response) => {
      setEmployee(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [id])
  


  const navigate = useNavigate()

  const [employee, setEmployee] = useState({

    firstName: "",
    lastName: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    EmployeeService.updateEmployee(id, employee).then((response) => {
      navigate("/employeeList")
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <form>
      <div className="space-y-12 w-1/2">          
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Employee</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  type="text"
                  value={employee.firstName}
                  onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                  autoComplete="given-name"
                  className=" px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  type="text"
                  value={employee.lastName}
                  onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                  autoComplete="family-name"
                  className=" px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  value={employee.email}
                  onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                  autoComplete="email"
                  className="px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 w-1/2">
        <button onClick={() => navigate("/employeeList")} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
              </button>
              <button
          className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={(e) => {
            e.preventDefault()
            setEmployee({
              firstName: "",
              lastName: "",
              email: ""
            })
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  )
}
