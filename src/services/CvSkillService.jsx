
import axios from "axios";
export default class CvSkillService {
  getCvSkills(id) {
    return axios.get("http://localhost:8080/api/cvsSkill/getCvSkillDetails?cvId="+id);
  }
}
