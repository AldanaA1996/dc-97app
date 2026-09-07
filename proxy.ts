import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "dc97_access";
const SESSION_VALUE = "authenticated";

export function proxy(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    if (session === SESSION_VALUE) {
      return NextResponse.redirect(new URL("/evaluacion", request.url));
    }

    return NextResponse.next();
  }

  if (session !== SESSION_VALUE) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/login|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
