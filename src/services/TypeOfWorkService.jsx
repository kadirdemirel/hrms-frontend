import React from "react";
import axios from "axios";
export default class TypeOfWorkService {
  getTypeOfWorks() {
    return axios.get("http://localhost:8080/api/typeOfWorks/getall");
  }
}
