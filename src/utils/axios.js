import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://redux-search-filter.herokuapp.com",
});

export default axiosInstance;
