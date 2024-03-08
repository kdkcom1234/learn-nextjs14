"use client"; // 클라이언트 컴포넌트라고 명시

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname(); // 클라이언트 컴포넌트에서만 사용 가능
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" && "🔥"}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" && "🔥"}
        </li>
      </ul>
    </nav>
  );
}
