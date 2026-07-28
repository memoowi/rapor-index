import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const isMt = process.env.IS_MT === 'true';
  const { pathname } = request.nextUrl;

  if (isMt) {
    // If IS_MT is true, redirect all other routes to /mt
    if (pathname !== '/mt' && !pathname.startsWith('/mt/')) {
      const url = request.nextUrl.clone();
      url.pathname = '/mt';
      return NextResponse.redirect(url);
    }
  } else {
    // If IS_MT is false, block access to /mt by redirecting to /
    if (pathname === '/mt' || pathname.startsWith('/mt/')) {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
