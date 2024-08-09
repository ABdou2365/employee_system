import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employee = ({ employee , deleteEmployee}) => {
    const navigate = useNavigate()
  return (
    <tr >
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        {employee.firstName}
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        {employee.lastName}
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        {employee.email}
                    </th>
                    <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        <a
                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
                    onClick={() => navigate(`/editEmployee/${employee.id}`)}>
                        Edit
                        </a>
                        <a
                  className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                  onClick={(e, id) => deleteEmployee(e,employee.id)}
              >
                        Delete
                        </a>
                    </th>
                    </tr>
  )
}

export default Employee