import { WEBSITE_URL } from "config";

export default async function CommentLoad({ slug }: { slug: string }) {
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
    <ul className="flex flex-col items-center space-y-4 whitespace-normal ">
      {/* @ts-ignore*/}
      {comments.map((comment) => {
        return (
          <li
            key={comment.uuid}
            className="text-gray-100 border-2 border-amber-200 bg-green-900 bg-opacity-40 text-center box-border h-auto w-60 truncate... break-words whitespace-normal p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl "
          >
            <p className="text-start"> {comment.username} Says ...</p>
            <br />
            {comment.comment}
          </li>
        );
      })}
    </ul>
  );
}
