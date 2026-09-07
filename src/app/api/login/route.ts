import { NextResponse } from "next/server";

const SESSION_COOKIE = "dc97_access";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    password?: unknown;
  } | null;

  const password = process.env.LOGIN_PASSWORD;

  if (!password) {
    return NextResponse.json(
      { message: "La autenticación no está configurada en el servidor." },
      { status: 500 },
    );
  }

  if (body?.password !== password) {
    return NextResponse.json(
      { message: "Usuario o contraseña incorrectos." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "", {
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
