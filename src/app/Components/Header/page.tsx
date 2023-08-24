import Link from "next/link";
import "../../globals.css";
import Image from "next/image";
import Logo from "@/../public/finallogo.png";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8 mb-4">
      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={250}
          height={300}
          placeholder="blur"
        />
      </div>
      <div className="links-header-container">
        <div className="links-header">
          <div></div>
          <h2 className="footer-title">The Clicker Club</h2>
          <div className="links-header-right">
            <Link className="link :hover" href="/home">
              Home
            </Link>
            <Link className="link :hover" href="/blog">
              Blog
            </Link>

            <div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
