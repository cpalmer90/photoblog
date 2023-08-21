import Image from "next/image";
import Link from "next/link";
export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Clicker Club</h1>
        <Link href="/home">Enter</Link>
      </div>
    </main>
  );
}
