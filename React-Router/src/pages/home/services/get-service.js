import axiosInstance from "../../../config/axios";

const getPosts = async () => {
    try {
        const response = await axiosInstance.get('/posts');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getPosts;