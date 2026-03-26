import { PageContainer } from "@/components/layout/page-container";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonClassName } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content">
      <PageContainer className="section-shell">
        <section className="surface-panel p-8 sm:p-10 lg:p-14">
          <p className="eyebrow">Page Not Found</p>
          <h1 className="display-hero mt-4 max-w-[10ch] text-[var(--foreground)]">
            That route is not available in the rebuilt structure.
          </h1>
          <p className="body-copy mt-5 max-w-[60ch]">
            Use the homepage, product families or contact page to continue exploring the TUR catalog and inquiry routes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SmartLink href="/" className={buttonClassName()}>
              Return Home
            </SmartLink>
            <SmartLink href="/contact" className={buttonClassName("secondary")}>
              Contact TUR
            </SmartLink>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
