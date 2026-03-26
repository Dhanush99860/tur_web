type CanonicalSection = "door-hardware" | "automatic-operators";
type LegacyQueryRoute = "door_hardware" | "automatic_operators";

type LegacyFamilyDefinition = {
  slug: string;
  title: string;
};

type LegacyQueryConfig = {
  section: CanonicalSection;
  destination: `/${CanonicalSection}`;
  idMap: Record<string, string>;
  families: readonly LegacyFamilyDefinition[];
};

const legacyQueryConfigs: Record<LegacyQueryRoute, LegacyQueryConfig> = {
  door_hardware: {
    section: "door-hardware",
    destination: "/door-hardware",
    idMap: {
      // Legacy live-site category ids confirmed during migration audit.
      "10": "american-standard",
      "11": "european-ironmongery",
      "12": "glass-hardware",
      "13": "access-control",
    },
    families: [
      { slug: "american-standard", title: "American Standard" },
      { slug: "european-ironmongery", title: "European Ironmongery" },
      { slug: "glass-hardware", title: "Glass Hardware" },
      { slug: "access-control", title: "Access Control" },
      { slug: "sealing-systems", title: "Sealing Systems" },
    ],
  },
  automatic_operators: {
    section: "automatic-operators",
    destination: "/automatic-operators",
    idMap: {},
    families: [
      { slug: "sliding-doors", title: "Sliding Doors" },
      { slug: "controlled-physical-access", title: "Controlled Physical Access" },
      { slug: "revolving-doors", title: "Revolving Doors" },
      { slug: "swing-door-drives", title: "Swing Door Drives" },
      { slug: "all-glass-systems", title: "All Glass Systems" },
      {
        slug: "automatic-pulse-generators-and-sensors",
        title: "Automatic Pulse Generators & Sensors",
      },
    ],
  },
};

function normalizeLegacyFamilyKey(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createLegacyFamilyMap(families: readonly LegacyFamilyDefinition[]) {
  return new Map(
    families.flatMap((family) => {
      const candidates = new Set([
        normalizeLegacyFamilyKey(family.title),
        normalizeLegacyFamilyKey(family.slug),
      ]);

      return Array.from(candidates, (candidate) => [candidate, family.slug] as const);
    }),
  );
}

const legacyFamilyMaps: Record<LegacyQueryRoute, Map<string, string>> = {
  door_hardware: createLegacyFamilyMap(legacyQueryConfigs.door_hardware.families),
  automatic_operators: createLegacyFamilyMap(legacyQueryConfigs.automatic_operators.families),
};

// Static one-to-one redirects from the legacy live site to the rebuilt canonical routes.
export const legacyStaticRedirects = [
  { source: "/about_us", destination: "/about", permanent: true },
  { source: "/contact_us", destination: "/contact", permanent: true },
  { source: "/download", destination: "/downloads", permanent: true },
  { source: "/download/", destination: "/downloads", permanent: true },
  { source: "/door_hardware", destination: "/door-hardware", permanent: true },
  { source: "/door_hardware/", destination: "/door-hardware", permanent: true },
  { source: "/automatic_operators", destination: "/automatic-operators", permanent: true },
  { source: "/automatic_operators/", destination: "/automatic-operators", permanent: true },
] as const;

const legacyQueryPathnameMap: Record<string, LegacyQueryRoute> = {
  "/door_hardware/sub": "door_hardware",
  "/automatic_operators/sub": "automatic_operators",
};

export function resolveLegacyFamilyRedirect(pathname: string, searchParams: URLSearchParams) {
  const normalizedPathname = pathname.replace(/\/+$/, "");
  const legacyRoute = legacyQueryPathnameMap[normalizedPathname];

  if (!legacyRoute) {
    return null;
  }

  const config = legacyQueryConfigs[legacyRoute];
  const legacyName = searchParams.get("n");
  const legacyId = searchParams.get("id");
  const matchedSlug =
    (legacyId ? config.idMap[legacyId] : undefined) ??
    (legacyName
      ? legacyFamilyMaps[legacyRoute].get(normalizeLegacyFamilyKey(legacyName))
      : undefined);

  return matchedSlug ? `/${config.section}/${matchedSlug}` : config.destination;
}

export function copyForwardableSearchParams(
  destinationSearchParams: URLSearchParams,
  sourceSearchParams: URLSearchParams,
) {
  for (const [key, value] of sourceSearchParams.entries()) {
    if (!value || key === "id" || key === "n") {
      continue;
    }

    destinationSearchParams.append(key, value);
  }
}
