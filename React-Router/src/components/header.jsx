import React from 'react';

function Header() {
    const id = 1
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About</a></li>
            <li><a href={`/profile/${id}`} className="hover:text-blue-300">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
