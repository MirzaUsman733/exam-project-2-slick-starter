import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </section>
  );
}
