"use client";
import { WEBSITE_URL } from "config";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

export default function CommentForm({
  slug,
  username,
}: {
  slug: string;
  username: string;
}) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // @ts-ignore
    const comment = event.target.comment.value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    const options = { body: formData, method: "POST" };
    const res = await fetch(`/api/comments/${slug}`, options);
    console.log(res);

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
      <p>
        Commenting as <strong>{username}</strong>
      </p>
      <br />
      <br />
      <label htmlFor="comment">Comment:</label>
      <br />
      <textarea
        name="comment"
        cols={75}
        rows={10}
        className="text-gray-100 border-2 border-amber-200 bg-green-900 bg-opacity-40 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
      />
      <br />
      <br />
      <button
        type="submit"
        disabled={isPending}
        className="flex flex-col content-center space-y-4 whitespace-normal   border-2 border-amber-200 bg-green-900 bg-opacity-40 p-2 hover:bg-amber-900 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
      >
        {isPending ? "Sending..." : "Post Comment"}
      </button>
    </form>
  );
}
