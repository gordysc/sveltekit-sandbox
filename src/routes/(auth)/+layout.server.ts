import type { LayoutServerLoad } from "./$types.js";
import { redirect } from "@sveltejs/kit";
import { isAuthenticated } from "@/apis/auth";

export const load: LayoutServerLoad = async ({ cookies }) => {
  if (isAuthenticated(cookies)) redirect(302, "/dashboard");
};
