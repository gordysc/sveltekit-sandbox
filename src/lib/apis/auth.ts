import type { Cookies } from "@sveltejs/kit";

const SID_STORAGE_KEY = "sandbox:sid";

export type LoginRequest = {
  email: string;
  password: string;
};

export function login(cookies: Cookies, _request: LoginRequest) {
  const base32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const values = new Array(40);

  for (let i = 0; i < values.length; i++) {
    values[i] = base32.charAt(Math.floor(Math.random() * 32));
  }

  const sid = values.join("");

  cookies.set(SID_STORAGE_KEY, sid, { path: "/" });
}

export function logout(cookies: Cookies) {
  cookies.delete(SID_STORAGE_KEY, { path: "/" });
}

export function isAuthenticated(cookies: Cookies) {
  return cookies.get(SID_STORAGE_KEY) !== undefined;
}
