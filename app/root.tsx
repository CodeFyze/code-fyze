import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import "./tailwind.css";
import Socials from "./components/Socials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { destroySession, getSession } from "./utills/session.server";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  // Optional: block DevTools JSON inspection request
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const url = new URL(request.url);
  if (url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    return new Response(null, { status: 404 });
  }

  return json({
    ENV: {
      API_BASE_URL: process.env.API_BASE_URL,
      TOKEN: token || null, 
    },
  });
}

export async function action({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/admin/login", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const isDashboardRoute = matches.some((match) =>
    match.pathname.startsWith("/dashboard")
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-white">
        {!isDashboardRoute && <Navbar />}
        {children}
        {!isDashboardRoute && <Socials />}
        <ScrollRestoration />
        <Scripts />
      </body>
      <footer>{!isDashboardRoute && <Footer />}</footer>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
        }}
      />
    </>
  );
}
