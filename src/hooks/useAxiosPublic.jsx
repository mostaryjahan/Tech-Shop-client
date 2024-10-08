import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-bay-six.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;