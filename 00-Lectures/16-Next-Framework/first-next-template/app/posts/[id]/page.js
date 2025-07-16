export default async function Post({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
