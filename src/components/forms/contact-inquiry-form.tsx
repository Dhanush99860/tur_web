"use client";

import { useId, useMemo, useState } from "react";
import { createInquiryHref } from "@/content/site/site-config";
import { cn } from "@/lib/utils/cn";

type ContactInquiryFormProps = {
  className?: string;
  title?: string;
  description?: string;
  subject?: string;
  submitLabel?: string;
};

type FormState = {
  name: string;
  email: string;
  phoneCode: string;
  phone: string;
  message: string;
};

type FieldName = keyof Pick<FormState, "name" | "email" | "phone" | "message">;

type PhoneCodeOption = {
  value: string;
  label: string;
};

const phoneCodeOptions: readonly PhoneCodeOption[] = [
  { value: "+971", label: "AE +971" },
  { value: "+966", label: "SA +966" },
  { value: "+974", label: "QA +974" },
  { value: "+968", label: "OM +968" },
  { value: "+965", label: "KW +965" },
  { value: "+973", label: "BH +973" },
  { value: "+91", label: "IN +91" },
  { value: "+44", label: "UK +44" },
  { value: "+1", label: "US +1" },
] as const;

function validateName(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Please enter your name.";
  }

  if (trimmedValue.length < 2) {
    return "Name must be at least 2 characters.";
  }

  return "";
}

function validateEmail(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Please enter your email address.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return "Enter a valid email address.";
  }

  return "";
}

function validatePhone(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Please enter your phone number.";
  }

  if (!/^[\d\s()+-]+$/.test(trimmedValue)) {
    return "Use digits and standard phone symbols only.";
  }

  const digitsOnly = trimmedValue.replace(/\D/g, "");

  if (digitsOnly.length < 7) {
    return "Phone number looks too short.";
  }

  return "";
}

function validateMessage(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Please enter your project message.";
  }

  if (trimmedValue.length < 20) {
    return "Message must be at least 20 characters.";
  }

  return "";
}

export function ContactInquiryForm({
  className,
  title = "Start your inquiry",
  description = "Product details, catalog support, and technical coordination.",
  subject = "Homepage Hero Inquiry",
  submitLabel = "Send Inquiry",
}: ContactInquiryFormProps) {
  const formId = useId();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phoneCode: "+971",
    phone: "",
    message: "",
  });
  const [touchedFields, setTouchedFields] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = useMemo(
    () => ({
      name: validateName(form.name),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
      message: validateMessage(form.message),
    }),
    [form],
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function markTouched(field: FieldName) {
    setTouchedFields((current) => ({
      ...current,
      [field]: true,
    }));
  }

  function shouldShowError(field: FieldName) {
    return Boolean((touchedFields[field] || submitAttempted) && errors[field]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phoneCode} ${form.phone.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    window.location.href = `${createInquiryHref(subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldBaseClassName =
    "min-w-0 rounded-[1rem] border bg-white/88 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition focus:outline-none";

  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-[color-mix(in_srgb,var(--border)_76%,white)] bg-[color-mix(in_srgb,var(--card)_94%,white)] p-2 shadow-[0_24px_56px_-40px_rgba(17,20,20,0.22)] sm:p-2",
        className,
      )}
    >
      <div className="rounded-[1.45rem] border border-[color-mix(in_srgb,var(--border)_72%,white)] bg-[linear-gradient(180deg,color-mix(in_srgb,white_90%,var(--warm)_10%),color-mix(in_srgb,var(--panel)_92%,white))] p-4 sm:p-3 lg:p-3.5">
        <div className="flex flex-col gap-3 border-b border-[color-mix(in_srgb,var(--border)_84%,white)] pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Project Inquiry
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.5rem,2vw,1.95rem)] leading-[0.98] tracking-[-0.045em] text-[var(--foreground)]">
              {title}
            </h2>
            <p className="mt-2 max-w-[30ch] text-[12px] leading-5.5 text-[var(--muted-foreground)] sm:text-[13px]">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:max-w-[80rem] sm:justify-end">
            <span className="rounded-full border border-[color-mix(in_srgb,var(--border)_88%,white)] bg-white/78 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
              24h response
            </span>
          </div>
        </div>

        <form className="mt-4.5 grid gap-3.5 sm:gap-4" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-3.5 lg:grid-cols-2">
            <label className="grid gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Name
              </span>
              <input
                type="text"
                value={form.name}
                onBlur={() => markTouched("name")}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                autoComplete="name"
                aria-invalid={shouldShowError("name")}
                aria-describedby={shouldShowError("name") ? `${formId}-name-error` : undefined}
                className={cn(
                  fieldBaseClassName,
                  "h-11 px-4",
                  shouldShowError("name")
                    ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                    : "border-[var(--border)] focus:border-[var(--accent)]",
                )}
              />
              {shouldShowError("name") ? (
                <span id={`${formId}-name-error`} className="text-[12px] leading-5 text-[color:#c55b5b]">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="grid gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Email
              </span>
              <input
                type="email"
                value={form.email}
                onBlur={() => markTouched("email")}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={shouldShowError("email")}
                aria-describedby={shouldShowError("email") ? `${formId}-email-error` : undefined}
                className={cn(
                  fieldBaseClassName,
                  "h-11 px-4",
                  shouldShowError("email")
                    ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                    : "border-[var(--border)] focus:border-[var(--accent)]",
                )}
              />
              {shouldShowError("email") ? (
                <span id={`${formId}-email-error`} className="text-[12px] leading-5 text-[color:#c55b5b]">
                  {errors.email}
                </span>
              ) : null}
            </label>
          </div>

          <label className="grid gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Number
            </span>
            <div className="grid grid-cols-[8.75rem_minmax(0,1fr)] gap-3 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
              <select
                value={form.phoneCode}
                onBlur={() => markTouched("phone")}
                onChange={(event) => updateField("phoneCode", event.target.value)}
                aria-label="Country code"
                className={cn(
                  fieldBaseClassName,
                  "h-11 appearance-none px-3.5",
                  shouldShowError("phone")
                    ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                    : "border-[var(--border)] focus:border-[var(--accent)]",
                )}
              >
                {phoneCodeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                value={form.phone}
                onBlur={() => markTouched("phone")}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Phone number"
                autoComplete="tel-national"
                inputMode="tel"
                aria-invalid={shouldShowError("phone")}
                aria-describedby={shouldShowError("phone") ? `${formId}-phone-error` : undefined}
                className={cn(
                  fieldBaseClassName,
                  "h-11 px-4",
                  shouldShowError("phone")
                    ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                    : "border-[var(--border)] focus:border-[var(--accent)]",
                )}
              />
            </div>
            {shouldShowError("phone") ? (
              <span id={`${formId}-phone-error`} className="text-[12px] leading-5 text-[color:#c55b5b]">
                {errors.phone}
              </span>
            ) : null}
          </label>

          <label className="grid gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Message
            </span>
            <textarea
              value={form.message}
              onBlur={() => markTouched("message")}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us about your project requirement"
              rows={3}
              aria-invalid={shouldShowError("message")}
              aria-describedby={shouldShowError("message") ? `${formId}-message-error` : undefined}
              className={cn(
                fieldBaseClassName,
                "min-h-[5.75rem] px-4 py-3 leading-5.5",
                shouldShowError("message")
                  ? "border-[color:#c55b5b] focus:border-[color:#c55b5b]"
                  : "border-[var(--border)] focus:border-[var(--accent)]",
              )}
            />
            {shouldShowError("message") ? (
              <span id={`${formId}-message-error`} className="text-[12px] leading-5 text-[color:#c55b5b]">
                {errors.message}
              </span>
            ) : null}
          </label>

          <div className="grid gap-3 border-t border-[color-mix(in_srgb,var(--border)_86%,white)] pt-3.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[1rem] border border-[var(--accent)] bg-[var(--accent)] px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--foreground-inverse)] transition duration-300 hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)] sm:min-w-[11.5rem] sm:w-auto"
            >
              {submitLabel}
            </button>
          </div>

          <p className="text-[11px] leading-5 text-[var(--muted-foreground)]">
            Your details are only used to respond to this inquiry.
          </p>
        </form>
      </div>
    </section>
  );
}


