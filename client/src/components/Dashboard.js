import React from 'react';
import Feed from './pages/Feed';
import MakePost from './MakePost';

export default function Dashboard() {
  return (
    <>
      <MakePost />
      <Feed />
    </>
  );
}
