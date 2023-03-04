import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function Feed() {
  const { allPosts } = useLoaderData();

  console.log('## allPosts', allPosts);

  return (
    <>
      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          January 13th, 2022
        </time>
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          {allPosts.map((post) => (
            <>
              <li>
                <Link
                  to={`/profile/${post.user._id}`}
                  className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img
                    className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
                    src={post.user.avatar}
                    alt={post.user.username}
                  />
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {post.user.username} created a post!
                      </span>
                    </div>
                    <div className="text-sm font-normal">{post.content}</div>
                  </div>
                </Link>
              </li>
            </>
          ))}
        </ol>
      </div>
    </>
  );
}
