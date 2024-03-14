// 클라이언트 컴포넌트라고 명시
// 클라이언트 사이드에서 리액트 컴포넌트로 작동
// 초기 렌더링은 서버사이드에서 처리함
"use client";

import styles from "../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname(); // 클라이언트 컴포넌트에서만 사용 가능
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" && "🔥"}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" && "🔥"}/
          <Link href="/about-us/company">Company</Link>{" "}
          {path === "/about-us/company" && "🔥"}
        </li>
      </ul>
    </nav>
  );
}
