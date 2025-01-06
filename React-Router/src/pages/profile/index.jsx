import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const users = [{
    id : 1,
    name : 'John Doe',
    email : 'john.doe@example.com',
},
    {
    id : 2,
    name : 'Jane Doe',
    email : 'jane.doe@example.com',
    }
]

function Profile() {
    const params = useParams()
    const navigate = useNavigate()

    const user = users.find(u => u.id === parseInt(params.id))
    if (!user) return <h1>User not found</h1>
  return (
    <div className="text-center p-6">
    <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
    <p className="text-lg mb-6">Welcome to your Profile.</p>
    <div className="border p-4 rounded-lg bg-gray-100 shadow-md inline-block">
        <h2 className="text-xl font-semibold mb-2">Name: {user.name}</h2>
        <h2 className="text-xl font-semibold mb-4">Email: {user.email}</h2>
        <button onClick={() => navigate(-1)}
             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
             Back</button>
    </div>
  </div>
  )
}

export default Profile;
