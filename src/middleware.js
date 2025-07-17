// Latin American countries that should get Spanish by default
const LATAM_COUNTRIES = [
  "AR", // Argentina
  "BO", // Bolivia
  "BR", // Brazil (Portuguese, but often Spanish-speaking users)
  "CL", // Chile
  "CO", // Colombia
  "CR", // Costa Rica
  "CU", // Cuba
  "DO", // Dominican Republic
  "EC", // Ecuador
  "SV", // El Salvador
  "GT", // Guatemala
  "HN", // Honduras
  "MX", // Mexico
  "NI", // Nicaragua
  "PA", // Panama
  "PY", // Paraguay
  "PE", // Peru
  "PR", // Puerto Rico
  "UY", // Uruguay
  "VE", // Venezuela
  "ES", // Spain
];

export function onRequest(context, next) {
  const { request, url } = context;
  const { pathname } = url;

  // Skip middleware for static assets
  if (
    pathname.startsWith("/_astro") ||
    pathname.startsWith("/favicon") ||
    (pathname.includes(".") && !pathname.endsWith("/"))
  ) {
    return next();
  }

  // Get user's country from Vercel's geo data (available in headers)
  const country = request.headers.get("x-vercel-ip-country") || "US";

  // Check if user already has a language preference in the URL
  const hasLanguagePrefix = pathname.startsWith("/en/");

  // If user already has a language prefix, continue
  if (hasLanguagePrefix) {
    return next();
  }

  // Check if user has a language preference cookie
  const cookies = request.headers.get("cookie") || "";
  const languagePreference = cookies.match(/preferred-language=([^;]+)/)?.[1];

  // If user has a saved preference for English, redirect to English
  if (languagePreference === "en" && !pathname.startsWith("/en/")) {
    const newUrl = new URL(url);
    newUrl.pathname = `/en${pathname}`;

    return new Response(null, {
      status: 302,
      headers: {
        Location: newUrl.toString(),
      },
    });
  }

  // If user is from outside LATAM and has no preference, redirect to English
  if (
    !LATAM_COUNTRIES.includes(country) &&
    !pathname.startsWith("/en/") &&
    !languagePreference
  ) {
    const newUrl = new URL(url);
    newUrl.pathname = `/en${pathname}`;

    // Create response with geo-detected cookie
    return new Response(null, {
      status: 302,
      headers: {
        Location: newUrl.toString(),
        "Set-Cookie": "geo-detected=true; Path=/; Max-Age=2592000", // 30 days
      },
    });
  }

  // For LATAM users or users with Spanish preference, continue (default Spanish)
  return next();
}
