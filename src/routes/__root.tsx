import { templeSchema } from "../lib/schema";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useNavigate,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconUrl from "../assets/image.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { SplashScreen } from "../components/SplashScreen";

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

  {
    title: "Korakkar Siddhar Temple | Jeeva Samadhi Peedam | Nagapattinam | கோரக்கர் சித்தர்"
  },

  {
    name: "description",
    content:
      "Korakkar Siddhar Jeeva Samadhi Peedam, Vadakku Poigainallur, Nagapattinam, Tamil Nadu. One of the 18 Tamil Siddhars. Temple timings, poojas, festivals and annadhanam."
  },

  {
    name: "keywords",
    content:
      "Korakkar Siddhar Temple, Korakkar Siddhar, Gorakkar Siddhar, Jeeva Samadhi, Nagapattinam Temple, Siddhar Temple Tamil Nadu, கொரக்கர் சித்தர், கோரக்கர் சித்தர் ஜீவசமாதி"
  },

  {
    name: "google-site-verification",
    content: "abc123xyz456"
  },

  {
    property: "og:title",
    content: "Korakkar Siddhar Temple | Jeeva Samadhi Peedam"
  },

  {
    property: "og:description",
    content:
      "Arulmigu Korakkar Siddhar Jeeva Samadhi Peedam - Vadakku Poigainallur, Nagapattinam."
  },

  {
    property: "og:url",
    content: "https://korakkarsiddhar.in"
  },

  {
    property: "og:type",
    content: "website"
  },
],

  links: [
  {
    rel: "canonical",
    href: "https://korakkarsiddhar.in"
  },

  {
    rel: "icon",
    type: "image/png",
    href: faviconUrl
  },

  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap"
  },

  {
    rel: "stylesheet",
    href: appCss
  }
],
scripts: [
  {
    type: "application/ld+json",
    children: JSON.stringify(templeSchema),
  },
],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ta">
      <head>
        <HeadContent />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CVW4M6DR69"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CVW4M6DR69');
            `,
          }}
        />
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // On mobile devices, redirect to home page on initial load/refresh if not already there
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      if (location.pathname !== '/') {
        navigate({ to: '/' });
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SplashScreen />
      <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden max-w-[100vw]">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp
          phoneNumber="917502041000"
          accountName="கோரக்கர் சித்தர் பீடம்"
          statusMessage="Online · Usually replies instantly"
          chatMessage="வணக்கம்! 🙏 கோரக்கர் சித்தர் ஜீவசமாதி பீடத்திற்கு வரவேற்கிறோம். பூஜை, நேர்த்திக்கடன், திருவிழா விவரங்களுக்கு WhatsApp-ல் தொடர்பு கொள்ளுங்கள்."
          prefilledMessage="வணக்கம்! கோரக்கர் சித்தர் பீடம் பற்றி மேலும் அறிய விரும்புகிறேன்."
          showNotification={true}
          notificationCount={1}
          tooltip="Chat with us"
        />
      </div>
    </QueryClientProvider>
  );
}
