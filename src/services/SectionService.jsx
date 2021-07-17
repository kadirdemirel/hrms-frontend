import axios from "axios";

export default class SectionService {
    getAll()
    {
        return axios.get("http://localhost:8080/api/sections/getall");
    }
  }