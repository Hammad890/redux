import useGetPosts from "./hooks/useGetPost";
import { useEffect } from "react";
import useDeletePost from "./hooks/useDeletePost";


function Home() {
    const { posts, getPostsData} = useGetPosts();
    const {deletePostData} = useDeletePost();
   

    useEffect(()=>{getPostsData()},[])
  return (
    <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Home Page</h1>
    <div className="flex flex-wrap -mx-4">
    {
        posts.map(post => (
            <div key={post.id} className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
                <div className="mt-4 flex justify-between">
            <button
              className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              onClick={() => deletePostData(post.id)}
            >
              Delete
            </button>
          </div>
                </div>
            </div>
        )) || <p>Loading...</p>
    }
    </div>
    </div>
  )
}

export default Home;