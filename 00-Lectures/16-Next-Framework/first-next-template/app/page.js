import ClickButton from "./components/ClickButton/ClickButton";

export default async function Home() {
  const res = await fetch('https://dummyjson.com/posts');
  const { posts } = await res.json();

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <ClickButton />
    </div>
  );
}



