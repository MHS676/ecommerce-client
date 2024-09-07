import axios from "axios";

const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_DOMAIN}`
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;