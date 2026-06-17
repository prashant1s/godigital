"use server";

import { cookies } from "next/headers";

export async function loginAdmin(password: string) {
  const actualPassword = process.env.ADMIN_PASSWORD;

  if (!actualPassword) {
    return { success: false, error: "Server configuration error." };
  }

  if (password === actualPassword) {
    // Await cookies() for Next.js 15+ compatibility
    const cookieStore = await cookies(); 
    
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true, // Prevents JavaScript from reading the cookie
      secure: process.env.NODE_ENV === "production", // Requires HTTPS in prod
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    return { success: true };
  }

  return { success: false, error: "Incorrect password." };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}

export async function checkAuthStatus() {
  const cookieStore = await cookies();
  return cookieStore.has("admin_session");
}
