import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display italic text-7xl text-[color:var(--granate-500)]">404</p>
        <h2 className="mt-4 font-display text-2xl">Este rincón no existe</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas se ha mudado o no llegó a nacer.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink-900)] hover:bg-[color:var(--granate-700)] transition-colors px-5 py-2.5 text-sm font-medium text-[color:var(--cream-100)]"
          >
            Volver a casa
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Algo ha fallado</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Prueba a recargar la página.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[color:var(--ink-900)] hover:bg-[color:var(--granate-700)] transition-colors px-5 py-2.5 text-sm font-medium text-[color:var(--cream-100)]"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="rounded-full border border-[color:var(--granate-500)]/30 px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--cream-200)] transition-colors"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "mitxoko. — Webs para comercios de Pamplona por 300 €" },
      { name: "description", content: "Webs profesionales para peluquerías, fisios, cafeterías y restaurantes de Pamplona. Hechas por una persona, no por una agencia." },
      { name: "author", content: "mitxoko" },
      { property: "og:title", content: "mitxoko. — Tu rincón en internet" },
      { property: "og:description", content: "Webs para comercios de Pamplona por 300 €. Dos semanas, sin sorpresas." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "mitxoko." },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#1F2D3D" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-180.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
