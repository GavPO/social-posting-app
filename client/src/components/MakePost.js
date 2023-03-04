import React from 'react';
import { Form } from 'react-router-dom';
import tw from 'twin.macro';


export default function MakePost() {

  return (
    <MakePostCard>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Want to create a post?
      </h5>

      <div className="mb-6">
        <Form className="mt-8 space-y-6" method="post">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="content" className="sr-only">
                Content
              </label>
              <input
                id="content"
                name="content"
                type="content"
                autoComplete="content"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Post Content"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Create Post
            </button>
          </div>
        </Form>
      </div>
    </MakePostCard>
  );
}

const MakePostCard = tw.div`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center flex flex-col`;
