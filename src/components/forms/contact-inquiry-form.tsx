"use client";

import { useId, useMemo, useState } from "react";
import { createInquiryHref } from "@/content/site/site-config";
import { ChevronDownIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils/cn";

type Country = { code: string; name: string; dial: string };

const GCC_MIDDLE_EAST: Country[] = [
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "QA", name: "Qatar", dial: "+974" },
  { code: "KW", name: "Kuwait", dial: "+965" },
  { code: "OM", name: "Oman", dial: "+968" },
  { code: "BH", name: "Bahrain", dial: "+973" },
  { code: "JO", name: "Jordan", dial: "+962" },
  { code: "LB", name: "Lebanon", dial: "+961" },
  { code: "IQ", name: "Iraq", dial: "+964" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "YE", name: "Yemen", dial: "+967" },
  { code: "SY", name: "Syria", dial: "+963" },
  { code: "PS", name: "Palestine", dial: "+970" },
  { code: "IR", name: "Iran", dial: "+98" },
  { code: "IL", name: "Israel", dial: "+972" },
];

const SOUTH_ASIA: Country[] = [
  { code: "IN", name: "India", dial: "+91" },
  { code: "LK", name: "Sri Lanka", dial: "+94" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "NP", name: "Nepal", dial: "+977" },
  { code: "MV", name: "Maldives", dial: "+960" },
  { code: "BT", name: "Bhutan", dial: "+975" },
  { code: "AF", name: "Afghanistan", dial: "+93" },
];

const SOUTHEAST_EAST_ASIA: Country[] = [
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "TH", name: "Thailand", dial: "+66" },
  { code: "VN", name: "Vietnam", dial: "+84" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "TW", name: "Taiwan", dial: "+886" },
  { code: "HK", name: "Hong Kong", dial: "+852" },
  { code: "KH", name: "Cambodia", dial: "+855" },
  { code: "MM", name: "Myanmar", dial: "+95" },
  { code: "LA", name: "Laos", dial: "+856" },
  { code: "BN", name: "Brunei", dial: "+673" },
  { code: "MN", name: "Mongolia", dial: "+976" },
  { code: "TL", name: "Timor-Leste", dial: "+670" },
];

const EUROPE: Country[] = [
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "CZ", name: "Czech Republic", dial: "+420" },
  { code: "SK", name: "Slovakia", dial: "+421" },
  { code: "HU", name: "Hungary", dial: "+36" },
  { code: "RO", name: "Romania", dial: "+40" },
  { code: "BG", name: "Bulgaria", dial: "+359" },
  { code: "HR", name: "Croatia", dial: "+385" },
  { code: "RS", name: "Serbia", dial: "+381" },
  { code: "SI", name: "Slovenia", dial: "+386" },
  { code: "ME", name: "Montenegro", dial: "+382" },
  { code: "BA", name: "Bosnia and Herzegovina", dial: "+387" },
  { code: "MK", name: "North Macedonia", dial: "+389" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "GR", name: "Greece", dial: "+30" },
  { code: "CY", name: "Cyprus", dial: "+357" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "RU", name: "Russia", dial: "+7" },
  { code: "UA", name: "Ukraine", dial: "+380" },
  { code: "BY", name: "Belarus", dial: "+375" },
  { code: "MD", name: "Moldova", dial: "+373" },
  { code: "LT", name: "Lithuania", dial: "+370" },
  { code: "LV", name: "Latvia", dial: "+371" },
  { code: "EE", name: "Estonia", dial: "+372" },
  { code: "LU", name: "Luxembourg", dial: "+352" },
  { code: "MT", name: "Malta", dial: "+356" },
  { code: "IS", name: "Iceland", dial: "+354" },
  { code: "LI", name: "Liechtenstein", dial: "+423" },
  { code: "MC", name: "Monaco", dial: "+377" },
  { code: "SM", name: "San Marino", dial: "+378" },
  { code: "GE", name: "Georgia", dial: "+995" },
  { code: "AM", name: "Armenia", dial: "+374" },
  { code: "AZ", name: "Azerbaijan", dial: "+994" },
  { code: "KZ", name: "Kazakhstan", dial: "+7" },
];

const NORTH_AMERICA: Country[] = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "MX", name: "Mexico", dial: "+52" },
];

const LATIN_AMERICA: Country[] = [
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "CL", name: "Chile", dial: "+56" },
  { code: "CO", name: "Colombia", dial: "+57" },
  { code: "PE", name: "Peru", dial: "+51" },
  { code: "VE", name: "Venezuela", dial: "+58" },
  { code: "EC", name: "Ecuador", dial: "+593" },
  { code: "BO", name: "Bolivia", dial: "+591" },
  { code: "PY", name: "Paraguay", dial: "+595" },
  { code: "UY", name: "Uruguay", dial: "+598" },
  { code: "CR", name: "Costa Rica", dial: "+506" },
  { code: "GT", name: "Guatemala", dial: "+502" },
  { code: "HN", name: "Honduras", dial: "+504" },
  { code: "NI", name: "Nicaragua", dial: "+505" },
  { code: "PA", name: "Panama", dial: "+507" },
  { code: "SV", name: "El Salvador", dial: "+503" },
  { code: "CU", name: "Cuba", dial: "+53" },
  { code: "DO", name: "Dominican Republic", dial: "+1809" },
  { code: "JM", name: "Jamaica", dial: "+1876" },
  { code: "TT", name: "Trinidad and Tobago", dial: "+1868" },
  { code: "GY", name: "Guyana", dial: "+592" },
  { code: "SR", name: "Suriname", dial: "+597" },
  { code: "HT", name: "Haiti", dial: "+509" },
  { code: "BZ", name: "Belize", dial: "+501" },
];

const AFRICA: Country[] = [
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "GH", name: "Ghana", dial: "+233" },
  { code: "TZ", name: "Tanzania", dial: "+255" },
  { code: "ET", name: "Ethiopia", dial: "+251" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "MA", name: "Morocco", dial: "+212" },
  { code: "TN", name: "Tunisia", dial: "+216" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "LY", name: "Libya", dial: "+218" },
  { code: "SD", name: "Sudan", dial: "+249" },
  { code: "SS", name: "South Sudan", dial: "+211" },
  { code: "UG", name: "Uganda", dial: "+256" },
  { code: "RW", name: "Rwanda", dial: "+250" },
  { code: "CM", name: "Cameroon", dial: "+237" },
  { code: "CI", name: "Côte d'Ivoire", dial: "+225" },
  { code: "SN", name: "Senegal", dial: "+221" },
  { code: "MZ", name: "Mozambique", dial: "+258" },
  { code: "ZM", name: "Zambia", dial: "+260" },
  { code: "ZW", name: "Zimbabwe", dial: "+263" },
  { code: "BW", name: "Botswana", dial: "+267" },
  { code: "NA", name: "Namibia", dial: "+264" },
  { code: "AO", name: "Angola", dial: "+244" },
  { code: "MG", name: "Madagascar", dial: "+261" },
  { code: "MU", name: "Mauritius", dial: "+230" },
  { code: "SC", name: "Seychelles", dial: "+248" },
  { code: "DJ", name: "Djibouti", dial: "+253" },
  { code: "ER", name: "Eritrea", dial: "+291" },
  { code: "SO", name: "Somalia", dial: "+252" },
  { code: "GA", name: "Gabon", dial: "+241" },
  { code: "CG", name: "Congo", dial: "+242" },
  { code: "CD", name: "Congo, DR", dial: "+243" },
  { code: "ML", name: "Mali", dial: "+223" },
  { code: "BF", name: "Burkina Faso", dial: "+226" },
  { code: "NE", name: "Niger", dial: "+227" },
  { code: "TD", name: "Chad", dial: "+235" },
  { code: "CF", name: "Central African Republic", dial: "+236" },
  { code: "GN", name: "Guinea", dial: "+224" },
  { code: "SL", name: "Sierra Leone", dial: "+232" },
  { code: "LR", name: "Liberia", dial: "+231" },
  { code: "GM", name: "Gambia", dial: "+220" },
  { code: "GW", name: "Guinea-Bissau", dial: "+245" },
  { code: "CV", name: "Cape Verde", dial: "+238" },
  { code: "ST", name: "São Tomé and Príncipe", dial: "+239" },
  { code: "GQ", name: "Equatorial Guinea", dial: "+240" },
  { code: "KM", name: "Comoros", dial: "+269" },
  { code: "BI", name: "Burundi", dial: "+257" },
  { code: "MW", name: "Malawi", dial: "+265" },
  { code: "LS", name: "Lesotho", dial: "+266" },
  { code: "SZ", name: "Eswatini", dial: "+268" },
  { code: "BJ", name: "Benin", dial: "+229" },
  { code: "TG", name: "Togo", dial: "+228" },
];

const OCEANIA: Country[] = [
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "FJ", name: "Fiji", dial: "+679" },
  { code: "PG", name: "Papua New Guinea", dial: "+675" },
  { code: "SB", name: "Solomon Islands", dial: "+677" },
  { code: "VU", name: "Vanuatu", dial: "+678" },
  { code: "WS", name: "Samoa", dial: "+685" },
  { code: "TO", name: "Tonga", dial: "+676" },
  { code: "KI", name: "Kiribati", dial: "+686" },
  { code: "FM", name: "Micronesia", dial: "+691" },
  { code: "MH", name: "Marshall Islands", dial: "+692" },
  { code: "PW", name: "Palau", dial: "+680" },
  { code: "NR", name: "Nauru", dial: "+674" },
  { code: "TV", name: "Tuvalu", dial: "+688" },
];

const CENTRAL_ASIA: Country[] = [
  { code: "UZ", name: "Uzbekistan", dial: "+998" },
  { code: "TJ", name: "Tajikistan", dial: "+992" },
  { code: "TM", name: "Turkmenistan", dial: "+993" },
  { code: "KG", name: "Kyrgyzstan", dial: "+996" },
];

const ALL_REGION_GROUPS = [
  { label: "GCC & Middle East", countries: GCC_MIDDLE_EAST },
  { label: "South Asia", countries: SOUTH_ASIA },
  { label: "Southeast & East Asia", countries: SOUTHEAST_EAST_ASIA },
  { label: "Europe", countries: EUROPE },
  { label: "North America", countries: NORTH_AMERICA },
  { label: "Latin America & Caribbean", countries: LATIN_AMERICA },
  { label: "Africa", countries: AFRICA },
  { label: "Oceania", countries: OCEANIA },
  { label: "Central Asia", countries: CENTRAL_ASIA },
];

const ALL_COUNTRIES_FLAT: Country[] = ALL_REGION_GROUPS.flatMap((g) => g.countries);

const INQUIRY_TYPES = [
  "Architectural hardware schedules and specifications",
  "Product catalog and technical data sheet requests",
  "Automatic door operator system selection",
  "Master key system design and cylinder hierarchy",
  "Access control coordination and integration",
  "Project-based supply and logistics",
  "General inquiry",
];

type ContactInquiryFormProps = {
  className?: string;
  title?: string;
  description?: string;
  subject?: string;
  submitLabel?: string;
  embedded?: boolean;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  country: string;
  phoneCode: string;
  phone: string;
  inquiryType: string;
  message: string;
};

type ValidatedField = "name" | "email" | "phone" | "inquiryType" | "message";

function validate(form: FormState) {
  const errors: Partial<Record<ValidatedField, string>> = {};
  const name = form.name.trim();
  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  const email = form.email.trim();
  if (!email) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";

  const phone = form.phone.trim();
  if (!phone) errors.phone = "Phone number is required.";
  else if (!/^[\d\s()+-]+$/.test(phone)) errors.phone = "Use digits and standard phone symbols only.";
  else if (phone.replace(/\D/g, "").length < 7) errors.phone = "Phone number looks too short.";

  if (!form.inquiryType) errors.inquiryType = "Please select an inquiry type.";

  const message = form.message.trim();
  if (!message) errors.message = "Please describe your project or inquiry.";
  else if (message.length < 20) errors.message = "Please provide at least 20 characters.";

  return errors;
}

const LABEL_CLASS =
  "block text-[9.5px] font-bold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--foreground)_48%,transparent)] mb-2.5";

const INPUT_BASE =
  "w-full rounded-xl border bg-[var(--background)] text-[13.5px] text-[var(--foreground)] placeholder:text-[color-mix(in_srgb,var(--foreground)_32%,transparent)] transition-[border-color,box-shadow] duration-150 focus:outline-none";

const INPUT_NORMAL = "border-[color-mix(in_srgb,var(--border)_120%,transparent)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_12%,transparent)]";
const INPUT_ERROR  = "border-[#c55b5b] focus:border-[#c55b5b] focus:shadow-[0_0_0_3px_rgba(197,91,91,0.12)]";

export function ContactInquiryForm({
  className,
  title = "Start your inquiry",
  description = "Product details, catalog support, and technical coordination.",
  subject = "Website Inquiry",
  submitLabel = "Send Inquiry",
  embedded = false,
}: ContactInquiryFormProps) {
  const id = useId();
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    country: "AE",
    phoneCode: "+971",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<ValidatedField, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => validate(form), [form]);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function touch(field: ValidatedField) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function showError(field: ValidatedField) {
    return Boolean((touched[field] || attempted) && errors[field]);
  }

  function handleCountryChange(code: string) {
    set("country", code);
    const match = ALL_COUNTRIES_FLAT.find((c) => c.code === code);
    if (match) set("phoneCode", match.dial);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(errors).length > 0) return;

    const countryName = ALL_COUNTRIES_FLAT.find((c) => c.code === form.country)?.name ?? form.country;

    const body = [
      `Name: ${form.name.trim()}`,
      form.company.trim() ? `Company: ${form.company.trim()}` : null,
      `Email: ${form.email.trim()}`,
      countryName ? `Country: ${countryName}` : null,
      `Phone: ${form.phoneCode} ${form.phone.trim()}`,
      `Inquiry Type: ${form.inquiryType}`,
      "",
      "Project Details:",
      form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `${createInquiryHref(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    const inner = (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]">
          <svg className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="font-display text-[1.4rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          Inquiry sent
        </h3>
        <p className="mt-3 max-w-[30ch] text-[13px] leading-[1.75] text-[var(--muted-foreground)]">
          Your email client has opened with the pre-filled inquiry. TUR will respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setAttempted(false); setTouched({}); setForm({ name: "", company: "", email: "", country: "AE", phoneCode: "+971", phone: "", inquiryType: "", message: "" }); }}
          className="mt-7 rounded-xl border border-[color-mix(in_srgb,var(--border)_120%,transparent)] bg-[var(--card)] px-5 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Send another inquiry
        </button>
      </div>
    );
    if (embedded) return inner;
    return (
      <section className={cn("rounded-[1.75rem] border border-[color-mix(in_srgb,var(--border)_76%,white)] bg-[var(--card)] p-2 shadow-[0_24px_56px_-40px_rgba(17,20,20,0.22)]", className)}>
        <div className="rounded-[1.45rem] border border-[color-mix(in_srgb,var(--border)_72%,white)] bg-[var(--card)]">
          {inner}
        </div>
      </section>
    );
  }

  const formContent = (
    <>
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-[color-mix(in_srgb,var(--border)_80%,transparent)] pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
            Project Inquiry
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.45rem,2vw,1.9rem)] leading-[1.02] tracking-[-0.042em] text-[var(--foreground)]">
            {title}
          </h2>
          <p className="mt-2 max-w-[38ch] text-[12.5px] leading-[1.7] text-[var(--muted-foreground)]">
            {description}
          </p>
        </div>
        <span className="shrink-0 self-start rounded-full border border-[color-mix(in_srgb,var(--border)_100%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,var(--card))] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          24h response
        </span>
      </div>

      {/* Form */}
      <form className="mt-5 grid gap-4" noValidate onSubmit={handleSubmit}>

        {/* Row 1 — Name + Company */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={LABEL_CLASS}>Full Name <span className="text-[var(--accent)]">*</span></span>
            <input
              type="text"
              value={form.name}
              placeholder="Your full name"
              autoComplete="name"
              onChange={(e) => set("name", e.target.value)}
              onBlur={() => touch("name")}
              aria-invalid={showError("name")}
              aria-describedby={showError("name") ? `${id}-name-err` : undefined}
              className={cn(INPUT_BASE, "h-11 px-4", showError("name") ? INPUT_ERROR : INPUT_NORMAL)}
            />
            {showError("name") && (
              <span id={`${id}-name-err`} className="mt-1.5 block text-[11px] text-[#c55b5b]">{errors.name}</span>
            )}
          </label>

          <label className="block">
            <span className={LABEL_CLASS}>Company / Organisation</span>
            <input
              type="text"
              value={form.company}
              placeholder="Your company name"
              autoComplete="organization"
              onChange={(e) => set("company", e.target.value)}
              className={cn(INPUT_BASE, "h-11 px-4", INPUT_NORMAL)}
            />
          </label>
        </div>

        {/* Row 2 — Email + Country */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={LABEL_CLASS}>Email Address <span className="text-[var(--accent)]">*</span></span>
            <input
              type="email"
              value={form.email}
              placeholder="you@company.com"
              autoComplete="email"
              onChange={(e) => set("email", e.target.value)}
              onBlur={() => touch("email")}
              aria-invalid={showError("email")}
              aria-describedby={showError("email") ? `${id}-email-err` : undefined}
              className={cn(INPUT_BASE, "h-11 px-4", showError("email") ? INPUT_ERROR : INPUT_NORMAL)}
            />
            {showError("email") && (
              <span id={`${id}-email-err`} className="mt-1.5 block text-[11px] text-[#c55b5b]">{errors.email}</span>
            )}
          </label>

          <label className="block">
            <span className={LABEL_CLASS}>Country</span>
            <div className="relative">
              <select
                value={form.country}
                onChange={(e) => handleCountryChange(e.target.value)}
                className={cn(INPUT_BASE, "h-11 appearance-none pl-4 pr-9", INPUT_NORMAL, "cursor-pointer")}
              >
                {ALL_REGION_GROUPS.map(({ label, countries }) => (
                  <optgroup key={label} label={label}>
                    {countries.map((c) => (
                      <option key={`${label}-${c.code}`} value={c.code}>{c.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--muted-foreground)]" />
            </div>
          </label>
        </div>

        {/* Row 3 — Phone code + number */}
        <div className="block">
          <span className={LABEL_CLASS}>Phone Number <span className="text-[var(--accent)]">*</span></span>
          <div className="grid grid-cols-[11rem_minmax(0,1fr)] gap-3">
            <div className="relative">
              <select
                value={form.phoneCode}
                onChange={(e) => set("phoneCode", e.target.value)}
                onBlur={() => touch("phone")}
                aria-label="Country dial code"
                className={cn(INPUT_BASE, "h-11 appearance-none pl-4 pr-8 text-[12.5px]", showError("phone") ? INPUT_ERROR : INPUT_NORMAL, "cursor-pointer")}
              >
                {ALL_REGION_GROUPS.map(({ label, countries }) => (
                  <optgroup key={label} label={label}>
                    {countries.map((c) => (
                      <option key={`dial-${label}-${c.code}`} value={c.dial}>
                        {c.code} {c.dial}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-[var(--muted-foreground)]" />
            </div>
            <input
              type="tel"
              value={form.phone}
              placeholder="Phone number"
              autoComplete="tel-national"
              inputMode="tel"
              onChange={(e) => set("phone", e.target.value)}
              onBlur={() => touch("phone")}
              aria-invalid={showError("phone")}
              aria-describedby={showError("phone") ? `${id}-phone-err` : undefined}
              className={cn(INPUT_BASE, "h-11 px-4", showError("phone") ? INPUT_ERROR : INPUT_NORMAL)}
            />
          </div>
          {showError("phone") && (
            <span id={`${id}-phone-err`} className="mt-1.5 block text-[11px] text-[#c55b5b]">{errors.phone}</span>
          )}
        </div>

        {/* Row 4 — Inquiry type */}
        <label className="block">
          <span className={LABEL_CLASS}>Inquiry Type <span className="text-[var(--accent)]">*</span></span>
          <div className="relative">
            <select
              value={form.inquiryType}
              onChange={(e) => set("inquiryType", e.target.value)}
              onBlur={() => touch("inquiryType")}
              aria-invalid={showError("inquiryType")}
              aria-describedby={showError("inquiryType") ? `${id}-type-err` : undefined}
              className={cn(
                INPUT_BASE,
                "h-11 appearance-none pl-4 pr-9 cursor-pointer",
                showError("inquiryType") ? INPUT_ERROR : INPUT_NORMAL,
                !form.inquiryType ? "text-[color-mix(in_srgb,var(--foreground)_32%,transparent)]" : "",
              )}
            >
              <option value="" disabled>Select inquiry type</option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--muted-foreground)]" />
          </div>
          {showError("inquiryType") && (
            <span id={`${id}-type-err`} className="mt-1.5 block text-[11px] text-[#c55b5b]">{errors.inquiryType}</span>
          )}
        </label>

        {/* Row 5 — Message */}
        <label className="block">
          <span className={LABEL_CLASS}>Project Details <span className="text-[var(--accent)]">*</span></span>
          <textarea
            value={form.message}
            placeholder="Describe your project — opening types, product families required, quantities, timeline, or any specific technical requirements."
            rows={4}
            onChange={(e) => set("message", e.target.value)}
            onBlur={() => touch("message")}
            aria-invalid={showError("message")}
            aria-describedby={showError("message") ? `${id}-msg-err` : undefined}
            className={cn(
              INPUT_BASE,
              "min-h-[7rem] resize-none px-4 py-3 leading-[1.65]",
              showError("message") ? INPUT_ERROR : INPUT_NORMAL,
            )}
          />
          {showError("message") && (
            <span id={`${id}-msg-err`} className="mt-1.5 block text-[11px] text-[#c55b5b]">{errors.message}</span>
          )}
        </label>

        {/* Submit */}
        <div className="mt-1 border-t border-[color-mix(in_srgb,var(--border)_80%,transparent)] pt-4">
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-6 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-[var(--accent-hover)] active:scale-[0.99]"
          >
            {submitLabel}
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </button>
          <p className="mt-3 text-center text-[11px] leading-[1.7] text-[color-mix(in_srgb,var(--foreground)_38%,transparent)]">
            Your details are used solely to respond to this inquiry and will not be shared.
          </p>
        </div>
      </form>
    </>
  );

  if (embedded) {
    return <div className={className}>{formContent}</div>;
  }

  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-[color-mix(in_srgb,var(--border)_76%,white)] bg-[color-mix(in_srgb,var(--card)_94%,white)] p-2 shadow-[0_24px_56px_-40px_rgba(17,20,20,0.22)]",
        className,
      )}
    >
      <div className="rounded-[1.45rem] border border-[color-mix(in_srgb,var(--border)_72%,white)] bg-[color-mix(in_srgb,white_96%,var(--panel))] p-5 sm:p-6">
        {formContent}
      </div>
    </section>
  );
}
