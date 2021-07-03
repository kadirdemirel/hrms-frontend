import axios from "axios";
export default class EmployeService {
  addEmploye(employe) {
    return axios.post("http://localhost:8080/api/employees/add",employe);
  }
}
