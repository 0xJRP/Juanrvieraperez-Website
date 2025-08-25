"use client";

import { useState } from "react";

export default function ContentPage() {
  const [q, setQ] = useState("");

  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-4xl font-semibold tracking-tight">Content</h1>

      {/* search */}
      <div className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="w-full bg-transparent border-b border-neutral-700 py-3 outline-none"
        />
        <span className="absolute right-0 top-3 text-neutral-500 text-sm">
          ⌘K
        </span>
      </div>

      {/* placeholder */}
      <p className="text-neutral-500">No posts yet. Content coming soon.</p>
    </main>
  );
}
