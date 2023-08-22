import { WEBSITE_URL } from "config";
import CommentForm from "./CommentForm";

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
      {" "}
      <CommentForm slug={slug} />
      <h3 className="flex flex-col text-center">Comments:</h3>
      <ul className="flex flex-col items-center space-y-4 whitespace-normal ">
        {/* @ts-ignore*/}
        {comments.map((comment) => {
          return (
            <li
              key={comment.uuid}
              className="text-white border-2 border-orange-400 bg-slate-500 bg-opacity-40 text-center box-border h-auto w-60 truncate... break-words whitespace-normal p-4"
            >
              <p className="text-start"> {comment.username} Says ...</p>
              <br />
              {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
