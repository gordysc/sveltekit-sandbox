import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "@/forms/login-form";
import { zod } from "sveltekit-superforms/adapters";
import { login, isAuthenticated } from "@/apis/auth";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema))
  };
};

export const actions: Actions = {
  default: async event => {
    const form = await superValidate(event, zod(formSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    login(event.cookies, form.data);

    if (isAuthenticated(event.cookies)) {
      redirect(302, "/dashboard");
    }
  }
};
