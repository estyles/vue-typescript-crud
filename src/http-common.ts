import axios from "axios";

export default axios.create({
  baseURL: "https://devapi.estyles.nl/api",
  headers: {
    "Content-type": "application/json"
  }
});