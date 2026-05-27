// ── Single source of truth for all TUR global offices ────────────────────────
// Edit here; every page that shows office data imports from this file.

export type SiteOffice = {
  name: string;
  region: string;
  countryCode: string;
  address: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
  note?: string;
  isPrimary: boolean;
};

export const siteOffices: SiteOffice[] = [
  {
    name: "TüR Middle East FZC",
    region: "Sharjah, UAE",
    countryCode: "AE",
    address: "Office No. LV-32B, Hamriyah Free Zone, Sharjah, UAE",
    phone: "+971 6 539 6440",
    phoneHref: "tel:+97165396440",
    email: "info@tur.com.co",
    emailHref: "mailto:info@tur.com.co",
    note: "Trade License 23473 / 23474",
    isPrimary: true,
  },
  {
    name: "Arabian Business Consultants L.L.C-FZ",
    region: "Dubai, UAE",
    countryCode: "AE",
    address: "The Meydan Hotel Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
    isPrimary: false,
  },
  {
    name: "James Gibbons Format Limited",
    region: "Derby, United Kingdom",
    countryCode: "GB",
    address: "11–13 Jubilee Parkway, Stores Road, Derby, England DE21 4BJ",
    phone: "+44 1332 346521",
    phoneHref: "tel:+441332346521",
    email: "simon.treagust@jgf.co.uk",
    emailHref: "mailto:simon.treagust@jgf.co.uk",
    note: "Authorised key duplication centre",
    isPrimary: false,
  },
  {
    name: "TüR Netherlands BV",
    region: "North Brabant, Netherlands",
    countryCode: "NL",
    address: "Retselseweg 6a, 5473 HC Heeswijk Dinther, North Brabant, Netherlands",
    phone: "+31 413 724988",
    phoneHref: "tel:+31413724988",
    email: "mailbox@tur-nl.nl",
    emailHref: "mailto:mailbox@tur-nl.nl",
    isPrimary: false,
  },
  {
    name: "TüR Hardware Inc.",
    region: "Toronto, Canada",
    countryCode: "CA",
    address: "161 Bay St., Toronto ON M5J 2S1, Canada",
    phone: "+1 416 670 1567",
    phoneHref: "tel:+14166701567",
    email: "info@tur.com.co",
    emailHref: "mailto:info@tur.com.co",
    isPrimary: false,
  },
  {
    name: "TüR India Pvt Ltd",
    region: "Bengaluru, India",
    countryCode: "IN",
    address: "Aurbis Prime, 11, Kaveri Regent Coronet, 80 Feet Road, 3rd Block, Koramangala, Bangalore 560034, Karnataka, India",
    phone: "+91 9900036101",
    phoneHref: "tel:+919900036101",
    email: "info@tur.com.co",
    emailHref: "mailto:info@tur.com.co",
    isPrimary: false,
  },
  {
    name: "TüR Lanka Holdings (Pvt) Ltd",
    region: "Rajagiriya, Sri Lanka",
    countryCode: "LK",
    address: "Unit 02, Level 04, 415 Cotta Road, Rajagiriya, Sri Lanka",
    phone: "+94 11 207 7123",
    phoneHref: "tel:+94112077123",
    email: "info@tur.com.co",
    emailHref: "mailto:info@tur.com.co",
    isPrimary: false,
  },
];
