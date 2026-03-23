import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames, defaultLocale } from "./navigation";

export default createMiddleware({
    // Lista de idiomas soportados
    locales,
    // Prefijo de ruta (siempre, nunca o as-needed)
    localePrefix,
    // Configuración de nombres de rutas
    pathnames,
    // IDIOMA POR DEFECTO (Esto es lo que te faltaba para que no fuerce el 'es')
    defaultLocale,
    // DESACTIVAR DETECCIÓN AUTOMÁTICA: 
    // Esto evita que el middleware lea el idioma de tu navegador/Windows 
    // y te obligue a entrar en español si estás en Latinoamérica.
    localeDetection: false 
});

export const config = {
    // Matcher para interceptar la raíz y las rutas con prefijo
    matcher: ["/", "/(es|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};