import axios from "axios";

export default class Candidate {
  getCandidates() {
    return axios.get("http://localhost:8080/api/candidates/getall");
  }
}
