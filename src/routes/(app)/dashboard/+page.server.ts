import type { Actions } from "./$types.js";
import { redirect } from "@sveltejs/kit";
import { logout } from "@/apis/auth";

export const actions: Actions = {
  logout: async ({ cookies }) => {
    logout(cookies);
    redirect(302, "/login");
  }
};
