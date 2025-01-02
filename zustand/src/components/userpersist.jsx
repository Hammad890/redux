import useUserStore from "../store/user";
import React from "react";

export default function UserPersist() {
  const { setUser, logout, user } = useUserStore();

  const handleSetUser = () => {
    setUser({ name: "hammad", email: "hammadnaseem123.com" });
  };

  return (
    <div>
      <h1>Store 1</h1>
      <p>User: {user ? JSON.stringify(user) : "No user set"}</p>
      <button onClick={handleSetUser}>Set User</button>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}