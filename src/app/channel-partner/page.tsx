import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Channel Partner Login | TUR",
  description:
    "TUR Global channel partner portal for regional workspaces, orders, inventory, RFQs, projects, finance and service.",
};

export default function ChannelPartnerPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#eef7f4]">
      <div className="flex min-h-12 items-center justify-between border-b border-[#d8e6e2] bg-white/90 px-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <Link
          href="/"
          className="inline-flex min-h-9 items-center justify-center rounded-full border border-[#d8e6e2] bg-white px-4 font-sans text-[10px] font-semibold uppercase text-[#0f4f49] transition hover:border-[#0f766e]"
          style={{ color: "#0f4f49" }}
        >
          Back to TUR website
        </Link>
        <span className="font-sans text-[10px] font-semibold uppercase text-[#607187]">
          Channel Partner Portal
        </span>
      </div>
      <iframe
        title="TUR Global Channel Partner Portal"
        src="/channel-partner-demo/index.html"
        className="min-h-0 flex-1 border-0"
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}
