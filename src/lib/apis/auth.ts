import type { Cookies } from "@sveltejs/kit";

const SID_STORAGE_KEY = "sandbox:sid";

export type LoginRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export function login(cookies: Cookies, request: LoginRequest) {
  console.log({ request });
  const base32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const values = new Array(40);

  for (let i = 0; i < values.length; i++) {
    values[i] = base32.charAt(Math.floor(Math.random() * 32));
  }

  const sid = values.join("");
  const maxAge = request.rememberMe ? 60 * 60 * 24 * 365 : undefined;

  console.log("login", { sid, maxAge });

  cookies.set(SID_STORAGE_KEY, sid, { path: "/", maxAge });
}

export function logout(cookies: Cookies) {
  cookies.delete(SID_STORAGE_KEY, { path: "/" });
}

export function isAuthenticated(cookies: Cookies) {
  return cookies.get(SID_STORAGE_KEY) !== undefined;
}
