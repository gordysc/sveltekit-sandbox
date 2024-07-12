import type { PageServerLoad } from "./$types.js";
import { redirect } from "@sveltejs/kit";
import { isAuthenticated } from "@/apis/auth";

export const load: PageServerLoad = async ({ cookies }) => {
  isAuthenticated(cookies)
    ? redirect(302, "/dashboard")
    : redirect(302, "/login");
};
