"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function Analytics() {
  const pathname = usePathname();
  const formStarted = useRef(false);

  useEffect(() => {
    if (!gaId || typeof window.gtag !== "function") {
      return;
    }

    const query = window.location.search.slice(1);
    window.gtag("event", "page_view", {
      page_path: `${pathname}${query ? `?${query}` : ""}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");
      if (!link) {
        return;
      }

      const href = link.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        window.gtag?.("event", "call_click", {
          link_url: href,
          page_path: window.location.pathname,
        });
        window.dataLayer?.push({
          event: "call_click",
          link_url: href,
          page_path: window.location.pathname,
        });
      } else if (href.includes("wa.me/")) {
        window.gtag?.("event", "whatsapp_click", {
          link_url: href,
          page_path: window.location.pathname,
        });
        window.dataLayer?.push({
          event: "whatsapp_click",
          link_url: href,
          page_path: window.location.pathname,
        });
      } else if (href === "/booking" || href.startsWith("/booking?")) {
        window.gtag?.("event", "booking_cta_click", {
          link_url: href,
          page_path: window.location.pathname,
        });
        window.dataLayer?.push({
          event: "booking_cta_click",
          link_url: href,
          page_path: window.location.pathname,
        });
      }
    };

    const handleFocus = (event: FocusEvent) => {
      const target = event.target;
      if (
        !formStarted.current &&
        target instanceof HTMLElement &&
        target.closest("form")
      ) {
        formStarted.current = true;
        window.gtag?.("event", "begin_lead", {
          form_location: window.location.pathname,
        });
        window.dataLayer?.push({
          event: "begin_lead",
          form_location: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("focusin", handleFocus, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("focusin", handleFocus, true);
    };
  }, []);

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                send_page_view: false,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
