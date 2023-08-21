import { WEBSITE_URL } from "config";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {
      next: { revalidate: 5 },
    });
    comments = await commentRes.json();
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <form action={`/api/comments/${slug}`} method="POST">
        <label htmlFor="username">Name</label>
        <br />
        <input
          name="username"
          className="text-white border-2 border-orange-400 bg-slate-500 bg-opacity-40"
        />
        <br />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea
          name="comment"
          cols={30}
          rows={10}
          className="text-white border-2 border-orange-400 bg-slate-500 bg-opacity-40"
        />
        <br />
        <br />
        <button type="submit">send comment</button>
      </form>
      <h3>Comments</h3>
      <ul>
        {/* @ts-ignore*/}
        {comments.map((comment) => {
          return (
            <li key={comment.uuid}>
              {comment.username} says...
              <br />
              {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
