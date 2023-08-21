// import { getPosts, getPostBySlug } from "@/lib/posts";
// import { notFound } from "next/navigation";
// type BlogPostParams = {
//   params: {
//     slug: string;
//   };
// };

// type Post = {
//   title: string;
//   content: string;
//   slug: string;
// };

// export function generateStaticParams() {
//   const posts = getPosts();

//   return posts.map((post) => ({ slug: post.slug }));
// }

// export default function BlogPost({ params }: BlogPostParams) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }
//   return (
//     <main>
//       <div className="box">
//         <h1>{post.title}</h1>
//         <p>{post.content}</p>
//       </div>
//     </main>
//   );
// }

import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Comments from "@/app/Components/Comments";
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-orange-400">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0, postlist"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      {/*@ts-ignore*/}
      <Comments slug={params.slug} />
    </article>
  );
}
