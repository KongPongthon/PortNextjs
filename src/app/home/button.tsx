"use client";
import { useProjectStore } from "../store/useProjectStore";
import Link from "next/link";

export default function OtherPage() {
  const setTargetId = useProjectStore((s) => s.setTargetId);

  return (
    <Link href="/home" onClick={() => setTargetId(2)}>
      <button className="btn">ไป Project 2</button>
    </Link>
  );
}
