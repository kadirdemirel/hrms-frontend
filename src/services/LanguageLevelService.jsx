import axios from "axios";
export default class LanguageLevelService {
  getLanguageLevels(id) {
    return axios.get(
      "http://localhost:8080/api/languageLevels/getLanguageLevelDetails?cvId=" +
        id
    );
  }
  updateLanguageLevel(array) {
    return axios.post(
      "http://localhost:8080/api/languageLevels/updateLanguageLevel?id=" +
        array.id +
        "&languageId=" +
        array.languageId +
        "&levelId=" +
        array.levelId
    );
  }
}
