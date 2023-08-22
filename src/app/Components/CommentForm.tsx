"use client";
import { WEBSITE_URL } from "config";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // @ts-ignore
    const username = event.target.username.value || "annonymous";
    // @ts-ignore
    const comment = event.target.comment.value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    const options = { body: formData, method: "POST" };
    const res = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, options);
    console.log(res);

    // @ts-ignore
    event.target.username.value = "";
    // @ts-ignore
    event.target.comment.value = "";

    startTransition(() => {
      router.refresh();
      console.log("relocation the page data");
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Name:</label>
      <br />
      <input
        name="username"
        className="text-white border-2 border-orange-400 bg-slate-500 bg-opacity-40"
      />
      <br />
      <br />
      <label htmlFor="comment">Comment:</label>
      <br />
      <textarea
        name="comment"
        cols={75}
        rows={10}
        className="text-white border-2 border-orange-400 bg-slate-500 bg-opacity-40"
      />
      <br />
      <br />
      <button
        type="submit"
        disabled={isPending}
        className="flex flex-col content-center space-y-4 whitespace-normal   border-2 border-orange-400 bg-slate-500 bg-opacity-40 p-2 hover:bg-orange-700"
      >
        {isPending ? "Sending..." : "Post Comment"}
      </button>
    </form>
  );
}
