import { allPosts as POSTS } from "contentlayer/generated";

// const POSTS = [
//   {
//     title: "How Wildlife Photography Became my Sanctuary for Mental Well-being",
//     slug: "post-one",
//     content:
//       "In the midst of life's constant hustle and the demands of a rapidly changing world, I found myself seeking solace and a sense of equilibrium. As someone who has always had an affinity for the outdoors and a deep appreciation for the wonders of the natural world, I stumbled upon an unexpected source of healing: wildlife photography. Little did I know that this art form would not only become a creative outlet but also a lifeline for my mental well-being.",
//   },
//   {
//     title: "Blog Two",
//     slug: "post-two",
//     content: "Hey this is my blog",
//   },
//   {
//     title: "Blog Three",
//     slug: "post-three",
//     content: "Hey this is my blog",
//   },
// ];

export function getPosts() {
  return POSTS;
}

export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}
