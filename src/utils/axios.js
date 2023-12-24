import axios from "axios";

const customFetch = axios.create({
  //   baseURL: "https://dummyjson.com/",
  baseURL: "https://recruitment-api.pyt1.stg.jmr.pl",
});

export default customFetch;
