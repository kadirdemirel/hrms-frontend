import axios from "axios";

export default class CvService {
  getCvs() {
    return axios.get("http://localhost:8080/api/cvs/getall");
  }
  getCvsById(id) {
    return axios.get("http://localhost:8080/api/cvs/getById?id=" + id);
  }
  updateCv(id, array) {
    return axios.post(
      "http://localhost:8080/api/cvs/updateCv?coverLetter=" +
        array.coverLetter +
        "&gitHubAddress=" +
        array.gitHubAddress +
        "&id=" +
        id +
        "&linkedlnAddress=" +
        array.linkedlnAddress +
        "&yearOfEmployment=" +
        array.yearOfEmployment +
        "&yearOfEntry=" +
        array.yearOfEntry +
        "&yearOfGraduation=" +
        array.yearOfGraduation +
        "&yearOff=" +
        array.yearOff
    );
  }
}
