import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>
        <Link href="./home">Home</Link>
      </div>
      <div>
        <Link href="./blog">Blog</Link>
      </div>
    </>
  );
}
