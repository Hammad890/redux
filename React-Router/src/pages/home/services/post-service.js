import axiosInstance from "../../../config/axios";

const createPost = async(payload)=>{
    try {
        const response = await axiosInstance.post('/posts', payload);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export default createPost;