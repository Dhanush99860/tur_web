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
  // Renamed product slug redirects — maintain inbound links from old site and nav
  { source: "/products/heavymaster-sliding-door", destination: "/products/heavymaster-hm", permanent: true },
  { source: "/products/escape-route-sliding-door", destination: "/products/escape-route-sliding-door-hm-f-ft", permanent: true },
  { source: "/products/picture-frame-corner-pic", destination: "/products/plug-in-connector-pic", permanent: true },
] as const;

// Maps legacy old-site query-param IDs (?id=N) to canonical destination paths.
// Covers both product detail pages (/products/...) and route-group listing pages.
// Sources: /door_hardware/sub/pro, /door_hardware/pro,
//          /automatic_operators/pro, /automatic_operators/sub/pro
const legacyDoorHardwareProductIdMap: Record<string, string> = {
  // ── Door Hardware / American Standard — route group listings ──
  "15": "/door-hardware/american-standard/hang-the-door",
  "16": "/door-hardware/american-standard/control-the-door",
  "17": "/door-hardware/american-standard/secure-the-door",
  "18": "/door-hardware/american-standard/bolt-the-door",
  "19": "/door-hardware/american-standard/ancillary-products",
  "20": "/door-hardware/american-standard/emergency-exits",
  "21": "/door-hardware/american-standard/furnish-the-door",
  "22": "/door-hardware/european-ironmongery/hang-the-door",
  "23": "/door-hardware/european-ironmongery/control-the-door",
  "24": "/door-hardware/european-ironmongery/secure-the-door",
  "25": "/door-hardware/european-ironmongery/cylinders",
  "26": "/door-hardware/european-ironmongery/furnish-the-door",
  "27": "/door-hardware/european-ironmongery/bolt-the-door",
  "28": "/door-hardware/european-ironmongery/ancillary-products",
  "29": "/door-hardware/european-ironmongery/emergency-exits",
  "37": "/door-hardware/european-ironmongery/furnish-the-door-lever-handle",

  // ── Door Hardware / American Standard — Hang The Door products ──
  "55": "/products/spring-hinge-standard-weight",
  "56": "/products/spring-hinge-standard-weight",
  "54": "/products/radius-corner-rc",
  "53": "/products/plug-in-connector-pic",
  "52": "/products/non-removable-pin-nrp",
  "51": "/products/hospital-tip-ht",
  "49": "/products/full-mortise-hinges-standard-weight",
  "48": "/products/full-mortise-hinges-heavy-weight",
  "46": "/products/electric-through-wire-etw",
  "45": "/products/detention-hinges",
  "44": "/products/continuous-hinges",
  "43": "/products/concealed-bearing-hinges",
  "2":  "/products/3d-adjustable-concealed-hinge",

  // ── Door Hardware / American Standard — Control The Door products ──
  "61": "/products/medium-duty-closer",
  "60": "/products/medium-heavy-duty-closer",
  "59": "/products/heavy-duty-closer",
  "58": "/products/extra-heavy-duty-closer",
  "57": "/products/concealed-door-closer",

  // ── Door Hardware / American Standard — Secure The Door products ──
  "74": "/products/ta2100-series-deadlock",
  "73": "/products/ta1200-series-standard-lever-designs",
  "72": "/products/ta1200-series-glass-patch-locksets",
  "71": "/products/ta1200-series-glass-patch-locksets",
  "70": "/products/ta1000-series-mortise-lockset-grade-1",
  "69": "/products/ta1000-series-anti-ligature-solutions",
  "68": "/products/ta1000-commercial-lever-styles",
  "67": "/products/occupied-indicators",
  "66": "/products/mortise-locksets",
  "65": "/products/escutcheon-plates",
  "64": "/products/designer-lever-styles",
  "63": "/products/deadlatch-locks",
  "62": "/products/cylindrical-locksets",

  // ── Door Hardware / American Standard — Bolt The Door products ──
  "81": "/products/manual-flush-bolt-for-wood-door",
  "80": "/products/manual-flush-bolt-for-metal-door",
  "79": "/products/dust-proof-strike",
  "78": "/products/constant-latching-flush-bolt-for-wood-doors",
  "77": "/products/constant-latching-flush-bolt-for-metal-doors",
  "76": "/products/automatic-flush-bolt-for-wood-doors",
  "75": "/products/automatic-flush-bolt-for-metal-door",

  // ── Door Hardware / American Standard — Ancillary Products ──
  "93": "/products/wall-stops-and-baseboard-stops",
  "92": "/products/surface-mounted-door-coordinator",
  "91": "/products/security-flush-pull",
  "90": "/products/roller-latches",
  "89": "/products/push-plate",
  "87": "/products/overhead-holders-stops",
  "86": "/products/floor-stops",
  "85": "/products/door-silencer-for-wooden-metal-doors",
  "84": "/products/door-protection-plates",
  "83": "/products/door-coordinators",
  "82": "/products/cast-surface-pull",

  // ── Door Hardware / American Standard — Emergency Exits ──
  "253": "/products/rim-exit-device",
  "252": "/products/narrow-design-surface-vertical-rod-exit-devices-svr",
  "251": "/products/narrow-stile-less-bottom-rod-exit-device-lbr",
  "250": "/products/narrow-stile-concealed-vertical-rod-exit-devices-cvr",
  "249": "/products/narrow-stile-mortise-lock-exit-devices",
  "248": "/products/narrow-stile-multi-points-exit-devices-3pts",
  "105": "/products/wide-stile-rim-exit-device",
  "103": "/products/wide-stile-surface-vertical-rod-exit-devices-svr",
  "102": "/products/wide-stile-less-bottom-rod-exit-device-lbr",
  "101": "/products/wide-stile-concealed-vertical-rod-exit-devices-cvr",
  "100": "/products/wide-stile-mortise-lock-exit-devices",
  "99": "/products/wide-stile-multi-points-exit-devices-3pts",
  "98": "/products/te9700-series",
  "97": "/products/surface-vertical-rod-exit-device",
  "96": "/products/less-bottom-rod-exit-device",
  "95": "/products/mortise-type-rim-exit-device",
  "94": "/products/concealed-vertical-rod-exit-device",

  // ── Door Hardware / American Standard — Furnish The Door products ──
  "117": "/products/ss304-grade-pull-handle",
  "116": "/products/sdc-shape-pull-handle",
  "115": "/products/sd-shape-pull-handle",
  "114": "/products/ov-shape-pull-handle",
  "113": "/products/od-shape-pull-handle",
  "112": "/products/oc-shape-pull-handle",
  "111": "/products/hc-shape-curved-pull-handle",
  "110": "/products/h-shape-pull-handle",
  "109": "/products/dq-shape-square-pull-handle-90",
  "108": "/products/dc-shape-curved-pull-handle",
  "107": "/products/d-shape-pull-handle",
  "106": "/products/45-h-shape-pull-handle",

  // Door Hardware / European Ironmongery - Hang The Door products
  "141": "/products/te4100-series",
  "131": "/products/rising-hinges",
  "130": "/products/3d-adjustable-concealed-hinges-european",
  "129": "/products/heavy-duty-double-action-spring-hinge",

  // Door Hardware / European Ironmongery - Control The Door products
  "263": "/products/door-closer-rack-pinion-standard-arm-project-series",
  "262": "/products/door-closer-rack-pinion-standard-arm-european",
  "260": "/products/door-closer-rack-pinion-track-arm-european",
  "259": "/products/door-closer-rack-pinion-standard-arm-te7768",
  "258": "/products/door-closer-rack-pinion-standard-arm-te7772v",
  "255": "/products/door-closer-rack-pinion-standard-arm-european-variant",
  "254": "/products/door-closer-rack-pinion-track-arm-te7763b",
  "145": "/products/door-closer-rack-pinion-track-arm-te7765g",
  "144": "/products/door-closer-rack-pinion-standard-arm-te7783g",
  "143": "/products/door-closer-concealed-rack-pinion-track-arm-te7766b",
  "142": "/products/door-closer-cam-action-track-arm-te7791b",
  "140": "/products/en-standard-door-closer-cam-action-system-te7792g",
  "139": "/products/door-closer-cam-action-track-arm-te7793p",
  "138": "/products/door-closer-rack-pinion-standard-arm-te7781j",
  "137": "/products/door-closer-concealed-cam-action-track-arm-te7796g",
  "136": "/products/concealed-cam-action-door-closer-track-arm-te7796m",
  "135": "/products/hydraulic-patch-fitting-te7820-60kg",
  "134": "/products/floor-spring-te7830",
  "133": "/products/floor-spring-te7850",

  // Door Hardware / European Ironmongery - Secure The Door products
  "267": "/products/te1400-series-mortise-sash-lock-premium",
  "266": "/products/te1400-series-privacy-lock",
  "264": "/products/te1400-series-latch-lock",
  "161": "/products/te1400-series-deadbolt-lock",
  "160": "/products/te1500-series-sash-lock-project",
  "159": "/products/te1500-series-privacy-lock",
  "158": "/products/te1500-series-latch-lock",
  "157": "/products/te1500-series-deadbolt-lock",
  "156": "/products/te1500-series-classroom-lock",
  "155": "/products/te1500-series-night-latch-lock",
  "154": "/products/te1500-series-mortise-x-ray-lock",
  "153": "/products/te1500-series-escape-lock",
  "152": "/products/roller-latch-sash-lock-european",
  "151": "/products/small-dead-bolt-lock",
  "150": "/products/small-latch-lock",
  "149": "/products/hook-lock",
  "148": "/products/hook-lock-for-ep-cylinder",
  "147": "/products/narrow-stile-sash-lock",
  "146": "/products/narrow-stile-deadbolt-lock",

  // Door Hardware / European Ironmongery - Cylinders products
  "168": "/products/te3600-series",
  "167": "/products/te3700-series",

  // Door Hardware / European Ironmongery - Furnish The Door products
  "193": "/products/pull-plates-european",
  "192": "/products/h-shape-pull-handle-european",
  "191": "/products/45-h-shape-pull-handle-european",
  "190": "/products/od-shape-pull-handle-european",
  "189": "/products/ov-shape-pull-handle-european",
  "188": "/products/d-shape-pull-handle-european",
  "187": "/products/special-handles",

  // Door Hardware / European Ironmongery - Bolt The Door products
  "197": "/products/lever-action-flush-bolt-european",
  "196": "/products/lever-action-flush-bolt-european-variant",
  "195": "/products/automatic-flush-bolt-for-wood-doors-european",
  "194": "/products/dust-proof-strike-european",

  // Door Hardware / European Ironmongery - Ancillary Products
  "215": "/products/door-stop-european",
  "214": "/products/thumb-turn-indicator",
  "213": "/products/door-guard",
  "212": "/products/door-holders",
  "211": "/products/door-viewer-european",
  "210": "/products/escutcheon-european",
  "209": "/products/flush-handle",
  "208": "/products/push-plate-european",
  "207": "/products/flush-ring-pull-handle",
  "206": "/products/finger-pull",
  "205": "/products/door-protection-plates-european",
  "204": "/products/dust-excluding-floor-socket",
  "203": "/products/easy-clean-floor-socket",
  "202": "/products/roller-latches-european",
  "201": "/products/coat-hook",
  "200": "/products/sign-plates",
  "199": "/products/special-sign-plates",

  // Door Hardware / European Ironmongery - Emergency Exits
  "230": "/products/te9800-series-premium",
  "229": "/products/narrow-stile-surface-vertical-rod-exit-device-european",
  "228": "/products/narrow-stile-concealed-vertical-rod-exit-device-european",
  "227": "/products/te9700-series-project",
  "226": "/products/surface-vertical-rod-exit-device-european",
  "225": "/products/less-bottom-rod-exit-device-european",
  "224": "/products/mortise-type-rim-exit-device-european",
  "223": "/products/concealed-vertical-rod-exit-device-commercial",
  "222": "/products/rim-exit-device-european",
  "221": "/products/surface-vertical-rod-exit-device-european-variant",
  "220": "/products/escutcheon-lever-trim-european-1",
  "219": "/products/escutcheon-lever-trim-european-2",
  "218": "/products/escutcheon-lever-trim-european-3",
  "217": "/products/escutcheon-lever-trim-european-4",
  "216": "/products/escutcheon-thumbpiece-trim-european",

  // Door Hardware / European Ironmongery - Furnish The Door Lever Handle products
  "186": "/products/lever-handle-te1910-968",
  "185": "/products/lever-handle-te1910-967",
  "184": "/products/lever-handle-te1910-966",
  "183": "/products/lever-handle-te1910-970",
  "182": "/products/lever-handle-te1920-968",
  "181": "/products/lever-handle-te1920-967",
  "180": "/products/lever-handle-te1920-966",
  "179": "/products/lever-handle-te1920-971",
  "178": "/products/lever-handle-te1920-977",
  "177": "/products/lever-handle-te1920-970",
  "176": "/products/lever-handle-te1920-964",
  "175": "/products/lever-handle-te1920-938",
  "174": "/products/lever-handle-te1920-939",
  "173": "/products/lever-handle-te1920-911",
  "172": "/products/lever-handle-te1920-955",
  "171": "/products/knob-handle-te1920-910",
  "170": "/products/knob-handle-te1920-914",
  "169": "/products/knob-handle-te1920-912",

  // Door Hardware / Glass Hardware - Glass Hinge & Glass Clip products
  "348": "/products/tg-gh101",
  "347": "/products/tg-gh102",
  "346": "/products/tg-gh103",
  "345": "/products/tg-gh104",
  "344": "/products/tg-gh105",
  "343": "/products/tg-gh106",
  "342": "/products/tg-gh201",
  "341": "/products/tg-gh202",
  "340": "/products/tg-gh203",
  "339": "/products/tg-gh204",
  "338": "/products/tg-gh205",
  "337": "/products/tg-gh206",
  "336": "/products/tg-gh301",
  "335": "/products/tg-gh302",
  "334": "/products/tg-gh303",
  "333": "/products/tg-gh304",
  "331": "/products/tg-gh306",

  // Door Hardware / Glass Hardware - Bathroom Handle & Glass Knob products
  "385": "/products/tg-pf103",
  "370": "/products/tg-bh101",
  "369": "/products/tg-bh102",
  "368": "/products/tg-bh105",
  "363": "/products/tg-bh106",
  "362": "/products/tg-gk102-tg-gk102-h",
  "361": "/products/tg-gk103-tg-gk103-h",
  "360": "/products/tg-gk106-tg-gk106-h",
  "359": "/products/tg-gk107-tg-gk107-h",

  // Door Hardware / Glass Hardware - Patch Fitting products
  "387": "/products/tg-pf101",
  "386": "/products/tg-pf102",
  "384": "/products/tg-pf103a",
  "383": "/products/tg-pf104",
  "382": "/products/tg-pf105s",
  "381": "/products/tg-pf301",
  "380": "/products/tg-pf302",
  "378": "/products/tg-pf303a",
  "377": "/products/tg-pf304",
  "375": "/products/tg-pf308",
  "374": "/products/tg-pf30k",
  "373": "/products/tg-fs201",
  "372": "/products/tg-pf103",
  "371": "/products/tg-pf303",

  // Door Hardware / Glass Hardware - Pull Handle products
  "397": "/products/tg-ph001",
  "396": "/products/tg-ph002",
  "395": "/products/tg-ph003",
  "394": "/products/tg-ph006",
  "393": "/products/tg-ph007",
  "392": "/products/tg-ph009",
  "391": "/products/tg-ph019",
  "390": "/products/tg-ph020",
  "389": "/products/tg-ph023",
  "388": "/products/tg-ph024",

  // Door Hardware / Glass Hardware - Lipseal products
  "405": "/products/tg-ls101",
  "404": "/products/tg-ls102",
  "403": "/products/tg-ls103",
  "402": "/products/tg-ls104",
  "401": "/products/tg-ls105",
  "400": "/products/tg-ls106",
  "399": "/products/tg-ls107",
  "398": "/products/tg-ls108",
  // ── Access Control products ──
  "408": "/products/tu-300",
  "407": "/products/tu-600-electromagnetic-lock",
  "406": "/products/tu-800",
  "241": "/products/tu-1200",
  "240": "/products/tu-d600",
  "239": "/products/tu-d800",
  "238": "/products/tu-d1200",
  "430": "/products/tu-1296",
  "242": "/products/tu-1297",
  "410": "/products/tu-600-armature-mounting-accessory",
  "409": "/products/tu-810-armature-mounting-accessory",
  "412": "/products/tu-l800",
  "411": "/products/tu-pbh-350",
  "415": "/products/easiprox",
  "414": "/products/easiprox-slim",
  "413": "/products/e1196",
  "416": "/products/tu-dg-750",
  "418": "/products/tu-rts-600",
  "417": "/products/tu-rts-500",
  "421": "/products/tu-d900f",
  "420": "/products/tu-d900w",
  "419": "/products/tu-d990",
  "426": "/products/tu-dl-400",
  "425": "/products/tu-dl-417st",
  "424": "/products/tu-2071",
  "423": "/products/tu-2071-ar",
  "422": "/products/tu-2031",
  // ── Sealing Systems products ──
  "273": "/products/door-bottom-seals-ts8si",
  "272": "/products/door-bottom-seals-ts70",
  "271": "/products/door-bottom-seals-ts5a",
  "270": "/products/door-bottom-seals-ts17b",
  "268": "/products/door-bottom-seals-ts99si",
  "276": "/products/threshold-plate-seals-ts115",
  "275": "/products/threshold-plate-seals-ts117si",
  "274": "/products/threshold-plate-seals-ts111si",
  "301": "/products/threshold-plates-ts19",
  "281": "/products/threshold-plates-ts18",
  "279": "/products/threshold-plates-ts27",
  "278": "/products/threshold-plates-ts28",
  "277": "/products/threshold-plates-ts77",
  "282": "/products/intumescent-seals-ts114",
  "289": "/products/door-frame-or-perimeter-seals-ts120",
  "288": "/products/door-frame-or-perimeter-seals-ts69",
  "287": "/products/door-frame-or-perimeter-seals-ts73",
  "286": "/products/door-frame-or-perimeter-seals-ts124",
  "285": "/products/door-frame-or-perimeter-seals-ts56",
  "283": "/products/door-frame-or-perimeter-seals-ts78si",
  "290": "/products/astragals-ts16si",
  "291": "/products/magnetic-astragals-ts65",
  "292": "/products/self-adhesive-seals-ts48b",
  "296": "/products/brush-strip-seals-ts2a",
  "295": "/products/brush-strip-seals-ts2b",
  "294": "/products/brush-strip-seals-ts41",
  "293": "/products/brush-strip-seals-ts74",
  "299": "/products/complementary-products-ts62",
  "298": "/products/complementary-products-ts62bw",
  "300": "/products/weather-stripping-ts600-series",
};

const legacyDoorHardwareListingIdMap: Record<string, string> = {
  "30": "/door-hardware/glass-hardware/glass-hinge-glass-clip",
  "50": "/door-hardware/glass-hardware/bathroom-handle-glass-knob",
  "51": "/door-hardware/glass-hardware/patch-fitting",
  "52": "/door-hardware/glass-hardware/pull-handle",
  "53": "/door-hardware/glass-hardware/lipseal",
  // ── Access Control route group listings ──
  "31": "/door-hardware/access-control/electromagnetic-locks",
  "32": "/door-hardware/access-control/electric-strikes",
  "63": "/door-hardware/access-control/armature-mounting-accessories",
  "64": "/door-hardware/access-control/electromechanical-locking-devices",
  "65": "/door-hardware/access-control/e-access",
  "66": "/door-hardware/access-control/digital-keypad-system",
  "67": "/door-hardware/access-control/infrared-wireless-exit-devices",
  "68": "/door-hardware/access-control/electromagnetic-door-holders",
  "69": "/door-hardware/access-control/access-control-accessories",
  // ── Sealing Systems route group listings ──
  "38": "/door-hardware/sealing-systems/door-bottom-seals",
  "39": "/door-hardware/sealing-systems/threshold-plate-seals",
  "40": "/door-hardware/sealing-systems/threshold-plates",
  "41": "/door-hardware/sealing-systems/intumescent-seals",
  "42": "/door-hardware/sealing-systems/door-frame-or-perimeter-seals",
  "43": "/door-hardware/sealing-systems/astragals",
  "44": "/door-hardware/sealing-systems/magnetic-astragals",
  "45": "/door-hardware/sealing-systems/self-adhesive-seals",
  "46": "/door-hardware/sealing-systems/brush-strip-seals",
  "47": "/door-hardware/sealing-systems/complementary-products",
  "48": "/door-hardware/sealing-systems/weather-stripping",
};

const legacyAutomaticOperatorProductIdMap: Record<string, string> = {
  // ── Automatic Operators — Sliding Doors ──
  "27": "/products/prismatic-sliding-door-cmw",
  "26": "/products/curved-sliding-door-cmr",
  "25": "/products/telescoping-sliding-door-emt",
  "24": "/products/escape-route-sliding-door-hm-f-ft",
  "23": "/products/heavymaster-hm",
  "22": "/products/economaster-em",
  "21": "/products/compactmaster-cm",
  // ── Automatic Operators — category listing ──
  "4":  "/automatic-operators/sliding-doors",
};

export const legacyProductIdMap: Record<string, string> = {
  ...legacyDoorHardwareProductIdMap,
  ...legacyAutomaticOperatorProductIdMap,
};

const legacyQueryPathnameMap: Record<string, LegacyQueryRoute> = {
  "/door_hardware/sub": "door_hardware",
  "/automatic_operators/sub": "automatic_operators",
};

const legacyProductQueryPathnames = new Set([
  "/door_hardware/sub/pro",
  "/door_hardware/sub/products",
  "/door_hardware/pro",
  "/door_hardware/products",
  "/automatic_operators/sub/pro",
  "/automatic_operators/sub/products",
  "/automatic_operators/pro",
  "/automatic_operators/products",
]);

// Also resolve listing-level redirects by ?id= on category/sub pages
const legacyListingQueryPathnames = new Set([
  "/automatic_operators/sub",
  "/automatic_operators/products",
  "/door_hardware/sub",
]);

export function resolveLegacyProductRedirect(
  pathname: string,
  searchParams: URLSearchParams,
): string | null {
  const normalizedPathname = pathname.replace(/\/+$/, "");
  const isProductPath = legacyProductQueryPathnames.has(normalizedPathname);
  const isListingPath = legacyListingQueryPathnames.has(normalizedPathname);

  if (!isProductPath && !isListingPath) {
    return null;
  }

  const legacyId = searchParams.get("id");
  if (
    legacyId &&
    normalizedPathname === "/door_hardware/sub/products" &&
    legacyDoorHardwareListingIdMap[legacyId]
  ) {
    return legacyDoorHardwareListingIdMap[legacyId];
  }

  const scopedProductIdMap = normalizedPathname.startsWith("/automatic_operators")
    ? legacyAutomaticOperatorProductIdMap
    : legacyDoorHardwareProductIdMap;

  // Check the product/listing ID map first — values are full canonical paths
  if (legacyId && scopedProductIdMap[legacyId]) {
    return scopedProductIdMap[legacyId];
  }

  // For listing paths (e.g. /door_hardware/sub), only handle ID-mapped entries above.
  // Unmatched listing paths fall through to resolveLegacyFamilyRedirect in the proxy.
  if (isListingPath && !isProductPath) {
    return null;
  }

  // For product paths: try name-based lookup as secondary resolution
  const legacyName = searchParams.get("n");
  if (legacyName) {
    const normalized = normalizeLegacyFamilyKey(legacyName);
    if (normalizedPathname.startsWith("/automatic_operators")) {
      const slug = legacyFamilyMaps["automatic_operators"].get(normalized);
      return slug ? `/automatic-operators/${slug}` : "/automatic-operators";
    }
    const slug = legacyFamilyMaps["door_hardware"].get(normalized);
    return slug ? `/door-hardware/${slug}` : "/door-hardware";
  }

  // Final fallback for product paths with no resolvable ID or name
  if (normalizedPathname.startsWith("/automatic_operators")) {
    return "/automatic-operators";
  }

  return "/door-hardware";
}

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
