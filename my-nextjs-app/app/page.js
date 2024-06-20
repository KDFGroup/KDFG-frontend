import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
      <div>
      <Header />
       <h1>Home Page</h1>
      </div>
    </main>
  );
}
