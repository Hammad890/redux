import axiosInstance from "../../../config/axios";

const deletePosts = async(id)=>{
    try {
        const response = await axiosInstance.delete(`/posts/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default deletePosts;