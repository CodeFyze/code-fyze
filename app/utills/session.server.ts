// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

// Create session storage
const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "remix_session",
      secure: process.env.NODE_ENV === "production",
      secrets: [process.env.SESSION_SECRET || "s3cret"],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
    },
  });

export { getSession, commitSession, destroySession };