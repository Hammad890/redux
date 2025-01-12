import { useState } from "react";
import createPost from "../services/post-service";
import Swal from 'sweetalert2';

const usePostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts,setPosts]= useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const post  = await createPost({ title, content });
        setTitle("");
        setContent("");
        setPosts([...posts, post]);
        Swal.fire({
            title: 'Success!',
            text: 'Post created successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }catch (error) {
        console.error('Error creating post:', error);
        Swal.fire({
            title: 'Error!',
            text: 'There was an error creating the post.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }
}
    return {
        title,
        content,
        posts,
        handleTitleChange,
        handleContentChange,
        handleSubmit,
    };
};

export default usePostForm;