import {createSharedPathnamesNavigation, Pathnames} from 'next-intl/navigation';
 
export const locales = ['en', 'es'] as const;
export const localePrefix = 'always'; // Default

export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/about': '/about',

} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix,});