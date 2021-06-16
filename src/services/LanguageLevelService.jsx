import React from "react";
import axios from "axios";
export default class LanguageLevelService {
  getLanguageLevels(id) {
    return axios.get("http://localhost:8080/api/languageLevels/getLanguageLevelDetails?cvId="+id);
  }
}
