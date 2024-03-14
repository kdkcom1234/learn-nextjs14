import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  // 템플릿을 사용, 하위 경로에 metadata.title 문자열이 %s에 병합됨
  title: { template: "%s | Next Movies", default: "Next Movies" },
  description: "The best moviews on best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
