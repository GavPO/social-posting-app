import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import tw, { styled, css } from "twin.macro";

export default function Profile() {
  const { myProfile, user, posts } = useLoaderData();

  console.log(user, posts);

  const [showPosts, setShowPosts] = useState(false);

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {user.friends.length}
              </p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">{posts.length}</p>
              <p className="text-gray-400">Posts</p>
            </div>
          </div>
          <div className="relative">
            <UserAvatar src={user.avatar} />
          </div>

          {!myProfile && (
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Add Friend
              </button>
            </div>
          )}
        </div>

        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {user.username}
          </h1>
          <p className="font-light text-gray-600 mt-3">Location</p>

          <p className="mt-8 text-gray-500">Job</p>
          <p className="mt-2 text-gray-500">Education</p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            description
          </p>
          <button
            className="text-indigo-500 py-2 px-4  font-medium mt-4"
            onClick={togglePosts}
          >
            {showPosts ? "Hide Posts" : "Show Posts"}
          </button>
        </div>
      </div>
    </div>
  );
}

const UserAvatar = styled.div(({ src }) => [
  tw`w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500 bg-no-repeat bg-cover bg-center`,
  css`
    background-image: url(${src});
  `,
]);
