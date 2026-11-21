export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: AnalyticsParams = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, params);
  window.dataLayer?.push({
    event: eventName,
    ...params,
  });
}

export function trackLead(
  method: "website_form" | "whatsapp" | "phone",
  params: AnalyticsParams = {},
) {
  trackEvent("generate_lead", {
    method,
    currency: "INR",
    value: 1,
    page_location: window.location.href,
    page_title: document.title,
    ...params,
  });
}
