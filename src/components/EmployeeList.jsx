import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import Employee from './Employee'
const EmployeeList = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [employess, setEmployees] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await EmployeeService.getEmployees()
                console.log(response)
                setEmployees(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    const deleteEmployee = (e, id) => {
        e.preventDefault()
        EmployeeService.deleteEmployee(id).then(() => {
        if (employess) {
            setEmployees(employess.filter((employee) => employee.id !== id))
        }
        }).catch(error => {
            console.log(error)
        })
    }

        return (
            <div className="container mx-auto my-8">
            <div className="h-12 mb-12" >
                <button
                onClick={() => navigate("/addEmployee")}
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Add Employee
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        First Name
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Last Name
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Email ID
                    </th>
                    <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Actions
                    </th>
                    </tr>
                </thead>
                
                    <tbody className="bg-white">
                    {!loading && employess.map((employee) => (
                        <Employee employee={employee} key={employee.id} deleteEmployee={deleteEmployee}/>
                    ))}
                    </tbody>
                
                </table>
            </div>
            </div>
        )
}

export default EmployeeList