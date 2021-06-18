import axios from "axios";
export default class JobPostingService {
  getJobPostings() {
    return axios.get("http://localhost:8080/api/jobpostings/getall");
  }
  addJobPosting(jobPosting) {
    return axios.post("http://localhost:8080/api/jobpostings/add", jobPosting);
  }
  updateStatus(id, status) {
    return axios.post(
      "http://localhost:8080/api/jobpostings/statusUpdate?id=" +
        id +
        "&status=" +
        status
    );

  }
}
