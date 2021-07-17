import axios from "axios";
export default class SchoolSectionService {
  getSchoolSections(id) {
    return axios.get(
      "http://localhost:8080/api/schoolSections/getSchoolSectionDetails?cvId=" +
        id
    );
  }

  updateSchoolSection(array) {
    return axios.post(
      "http://localhost:8080/api/schoolSections/updateSchoolSection?id=" +
        array.id +
        "&schoolId=" +
        array.schoolId +
        "&sectionId=" +
        array.sectionId
    );
  }
}
