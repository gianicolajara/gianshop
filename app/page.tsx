"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main className="w-full h-full"></main>;
}
