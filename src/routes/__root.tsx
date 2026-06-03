import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <p className="mt-4 text-muted-foreground">பக்கம் கிடைக்கவில்லை</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-gradient-gold px-6 py-3 text-primary-foreground font-medium">
          முகப்புக்குச் செல்
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">பக்கம் ஏற்றப்படவில்லை</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-gradient-gold px-6 py-3 text-primary-foreground font-medium">
          மீண்டும் முயற்சி
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம் — அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம். ஆன்மீக அனுபவம், பூஜைகள், திருவிழாக்கள்." },
    ],
    links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" }, { rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ta">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden max-w-[100vw]">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
