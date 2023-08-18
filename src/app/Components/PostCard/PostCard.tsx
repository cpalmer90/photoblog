import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Post } from "contentlayer/generated";

export function PostCard(post: Post) {
  return (
    <div className="mb-8 postlist">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-orange-700 hover:text-orange-900 dark:text-orange-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-orange-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">
        <p>{post.blurb}</p>
      </div>
    </div>
  );
}
