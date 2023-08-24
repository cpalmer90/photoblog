import CommentForm from "./CommentForm";
import CommentLoad from "./Comment";
import type { User } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Comments({ slug }: { slug: string }) {
  const user: User | null = await currentUser();

  return (
    <div>
      {user ? (
        <>
          {/*@ts-ignore*/}
          <CommentForm slug={slug} username={user.username} />
        </>
      ) : (
        <Link href="/sign-in">Please Sign in to comment</Link>
      )}

      <h3 className="flex flex-col text-center">Comments:</h3>
      <CommentLoad slug={slug} />
    </div>
  );
}
