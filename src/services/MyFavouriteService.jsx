import axios from "axios";

export default class MyFavouriteService {
  addFavourite(candidateId, id) {
    return axios.post(
      "http://localhost:8080/api/myFavorites/insertCandidateAndJobPosting?candidateId=" +
        candidateId +
        "&jobPostingId=" +
        id
    );
  }
}
