import axios from "axios";
export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }
  updateEmployer(array) {
    return axios.put(
      "http://localhost:8080/api/employers/updateEmployer?companyName=" +
        array.companyName +
        "&id=" +
        array.id +
        "&phone=" +
        array.phone+"&status="+array.status
    );
  }
  updateEmployerClone(array) {
    return axios.put(
      "http://localhost:8080/api/employers/updateEmployerClone?companyNameClone=" +
        array.companyNameClone +
        "&id=" +
        array.id +
        "&phoneClone=" +
        array.phoneClone+"&status="+array.status
    );
  }
 
  getById(id)
  {
    return axios.get("http://localhost:8080/api/employers/getById?Id="+id);
  }
}
