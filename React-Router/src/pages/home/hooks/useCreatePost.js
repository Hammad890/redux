import { useState } from "react";
import createPost from "../services/post-service";

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
    }catch (error) {
        console.error('Error creating post:', error);
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