import deletePosts from "../services/delete-service";
import Swal from "sweetalert2";
import { useState } from "react";

const useDeletePost = () => {
    const [posts, setPosts] = useState([]);
    const deletePostData = async (postId) => {
        try {
            await deletePosts(postId);
            const updatedPosts = posts.filter((post) => post.id !== postId);
            setPosts(updatedPosts);
            Swal.fire({
                icon: 'success',
                title: 'Post Deleted',
                text: 'The post has been successfully deleted!',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'We could not delete the post at this moment.',
                confirmButtonText: 'OK',
            });
        }
    };
    return {posts,deletePostData};
}

export default useDeletePost;