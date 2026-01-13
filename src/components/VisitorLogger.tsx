'use client';

import { useEffect } from "react";

export default function VisitorLogger({ apiUrl, path }: { apiUrl?: string; path: string }) {
  useEffect(() => {
    const logVisitor = async () => {
      if (!apiUrl) return;
      try {
        await fetch(`${apiUrl}visitors/log`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ path }),
        });
      } catch (err) {
        console.error("Visitor logging failed:", err);
      }
    };

    logVisitor();
  }, [apiUrl, path]);

  return null;
}
