import axios from "axios";

const BASE_URL_API_ENDPOINT = "http://localhost:8080/api/v1/employee";

class EmployeeService {

    saveEmployee(employee) {
            return axios.post(BASE_URL_API_ENDPOINT, employee)
    }

    getEmployees() {
        return axios.get(BASE_URL_API_ENDPOINT)
    }

    getEmployeesById(id) {
        return axios.get(BASE_URL_API_ENDPOINT + "/" + id)
    }

    updateEmployee(id, employee) {
        return axios.put(BASE_URL_API_ENDPOINT + "/" + id, employee)
    }

    deleteEmployee(id) {
        return axios.delete(BASE_URL_API_ENDPOINT + "/" + id)
    }


}
export default new EmployeeService();