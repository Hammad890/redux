import getPosts from "../services/get-service";
import { useState } from "react";

function useGetPosts (){
    const [posts, setPosts] = useState([]);
    const getPostsData = async () => {
        try {
            const response = await getPosts();
            setPosts(response);
        } catch (error) {
            console.error(error);
        }
    };
    return { posts, getPostsData };
}


export default useGetPosts;