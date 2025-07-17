import { ui, defaultLang } from "./ui.js";

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path, lang) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguageUrl(currentUrl, targetLang) {
  const currentLang = getLangFromUrl(currentUrl);
  let basePath = currentUrl.pathname;

  // Remove current language prefix if it exists
  if (currentLang !== defaultLang) {
    basePath = basePath.replace(`/${currentLang}`, "");
  }

  // Add target language prefix if it's not the default
  if (targetLang === defaultLang) {
    return basePath || "/";
  }

  return `/${targetLang}${basePath}`;
}

// Check if user is browsing in their detected geo language
export function isGeoDetectedLanguage() {
  if (typeof document === "undefined") return false;

  // Check if geo-detected cookie exists
  return document.cookie.includes("geo-detected=true");
}

// Get user's preferred language from cookie
export function getPreferredLanguage() {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(/preferred-language=([^;]+)/);
  return match ? match[1] : null;
}
