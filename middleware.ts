import { auth } from "@/lib/auth";
import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

// Protected routes configuration
const protectedRoutes = ["/admin", "/portal/investor", "/portal/partner", "/portal/customer"];

// Role-based access mapping
const roleAccess: Record<string, string[]> = {
  admin: ["/admin", "/portal/investor", "/portal/partner", "/portal/customer"],
  investor: ["/portal/investor"],
  partner: ["/portal/partner"],
  customer: ["/portal/customer"],
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip auth check for API routes and static assets
  if (
    pathname.includes("/api/") ||
    pathname.includes("/_next") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // Extract locale from pathname
  const localeMatch = pathname.match(/^\/(en|zh|ru)(\/.*)?$/);
  const locale = localeMatch ? localeMatch[1] : defaultLocale;
  const pathWithoutLocale = localeMatch ? localeMatch[2] || "/" : pathname;

  // Check if route requires authentication
  const requiresAuth = protectedRoutes.some((route) =>
    pathWithoutLocale.startsWith(route)
  );

  if (requiresAuth) {
    const session = await auth();

    if (!session?.user) {
      // Redirect to login
      const loginUrl = new URL(`/${locale}/portal/login`, request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check role-based access
    const userRole = session.user.role;
    const allowedRoutes = roleAccess[userRole] || [];
    const hasAccess = allowedRoutes.some((route) =>
      pathWithoutLocale.startsWith(route)
    );

    if (!hasAccess) {
      // Redirect to appropriate dashboard based on role
      const dashboardUrl = getDashboardUrl(userRole, locale);
      return NextResponse.redirect(new URL(dashboardUrl, request.url));
    }
  }

  // Apply internationalization middleware
  return intlMiddleware(request);
}

function getDashboardUrl(role: string, locale: string): string {
  switch (role) {
    case "admin":
      return `/${locale}/admin`;
    case "investor":
      return `/${locale}/portal/investor`;
    case "partner":
      return `/${locale}/portal/partner`;
    case "customer":
      return `/${locale}/portal/customer`;
    default:
      return `/${locale}`;
  }
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
