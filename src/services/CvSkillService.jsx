import axios from "axios";
export default class CvSkillService {
  getCvSkills(id) {
    return axios.get(
      "http://localhost:8080/api/cvsSkill/getCvSkillDetails?cvId=" + id
    );
  }
  updateCvSkill(array) {
    return axios.post(
      "http://localhost:8080/api/cvsSkill/updateCvSkill?id=" +
        array.id +
        "&skillId=" +
        array.skillId
    );
  }
}
