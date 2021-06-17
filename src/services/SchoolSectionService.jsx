
import axios from "axios";
export default class SchoolSectionService {
  getSchoolSections(id) {
    return axios.get("http://localhost:8080/api/schoolSections/getSchoolSectionDetails?cvId="+id);
  }
}