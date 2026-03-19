import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es']; // JS puro
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',
  '/about': '/about',
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });