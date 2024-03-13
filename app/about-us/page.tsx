import { Metadata } from "next";
import Avartar from "./components/avatar";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutUsPage() {
  return (
    <main>
      <h1>
        About us! <Avartar />
      </h1>
    </main>
  );
}
