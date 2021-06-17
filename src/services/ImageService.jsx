
import axios from "axios";
export default class ImageService {
  getImages(id) {
    return axios.get("http://localhost:8080/api/images/getAllByCvId?cvId="+id);
  }
}
