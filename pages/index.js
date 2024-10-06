import React from 'react';

// Fungsi ini berjalan di server untuk SSR
export async function getServerSideProps() {
  // Ambil data dari API publik placeholder
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Kirim data sebagai props ke komponen
  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Server-Side Rendering (SSR) dengan Next.js</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
