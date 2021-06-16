import axios from "axios";
import React from "react";
export default class CvService {
  getCvs() {
    return axios.get("http://localhost:8080/api/cvs/getall");
  }
}
