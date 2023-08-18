// import Link from "next/link";
// import { getPosts } from "@/lib/posts";

// export default function BlogPage() {
//   const posts = getPosts();

//   return (
//     <div className="blogpage">
//       <h2>My Posts</h2>
//       <div className="postlist">
//         <ul>
//           {posts.map((post) => {
//             return (
//               <li key={post.slug}>
//                 <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>{" "}
//     </div>
//   );
// }

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { PostCard } from "../Components/PostCard/PostCard";

export default function Home() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Blog Entries</h1>
      {posts.map((post: Post, idx: number) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
