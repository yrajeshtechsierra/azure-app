"use client";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();
  const cookies = getCookies();

  useEffect(() => {
    router.replace(`/dashboard`);
  }, [router, cookies]);

  return <main></main>;
}
