<script lang="ts">
  import type { PageData } from "./$types.js";
  import { LoginForm } from "@/forms/login-form";
  export let data: PageData;
</script>

<div class="container mx-auto mt-10 max-w-sm space-y-4">
  <h1 class="text-2xl font-semibold">Sign into your account</h1>
  <LoginForm data={data.form} />
</div>
