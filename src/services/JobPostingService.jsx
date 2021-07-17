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

  getJobPostingsById(id) {
    return axios.get("http://localhost:8080/api/jobpostings/getById?id=" + id);
  }

  getAllByPage(pageNo, pageSize) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getAllByPage?pageNo=" +
        pageNo +
        "&pageSize=" +
        pageSize
    );
  }

  getByCityIdAndTypeOfWorkId(cityId, typeOfWorkId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getByCityIdAndTypeOfWorkId?cityId=" +
        cityId +
        "&typeOfWorkId=" +
        typeOfWorkId
    );
  }

  getByFilter(pageNo, pageSize, filterOption){
    return axios.post("http://localhost:8080/api/jobpostings/getByFilter?pageNo="+pageNo+"&pageSize="+pageSize,filterOption);
}


}
