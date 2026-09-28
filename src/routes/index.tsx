import { createFileRoute } from "@tanstack/react-router";
import IgniteApp from "@/components/IgniteApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESYASOFT IGNITE — Your First 90 Days" },
      { name: "description", content: "A calm, practical guide for Graduate Engineer Trainees arriving in Mangaluru." },
      { property: "og:title", content: "ESYASOFT IGNITE — Your First 90 Days" },
      { property: "og:description", content: "Know what to do next throughout your ESYASOFT trainee journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <IgniteApp />;
}
