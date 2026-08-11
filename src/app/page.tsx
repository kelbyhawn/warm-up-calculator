import { Suspense } from "react";
import Container from "../Container";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container />
    </Suspense>
  );
}
