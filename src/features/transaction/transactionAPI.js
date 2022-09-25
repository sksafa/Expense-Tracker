import axios from "../../utils/axios";

export const getTransactions = async () => {
    const response = await axios.get("/transactions");
    const getData = response.data;
   const  sortedData = getData.slice().sort((a, b) => b.id - a.id);
    return sortedData ;
};
//?_page=1&_limit=5

export const getAllTransactions = async (type,search,page) => {
    let queryString = "";
    if (type !== "") {
        queryString += `&q=${type}`;
    }
    if (search !== "") {
        queryString += `&q=${search}`;
    }
    if (queryString !== "") {
        queryString += `&_page=${page}&_limit=5`;
    } else {
        queryString += `_page=${page}&_limit=5`;
    }
    const response = await axios.get(`/transactions/?${queryString}`);
    return response.data;
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);
    return response.data;
};
