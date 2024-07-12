<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { Checkbox } from "@/components/ui/checkbox";
  import { formSchema, type FormSchema } from "./login-form.schema";
  import {
    type SuperValidated,
    type Infer,
    superForm
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { Label } from "@/components/ui/label";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema)
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="space-y-4">
  <Form.Field {form} name="email">
    <Form.Control let:attrs>
      <Form.Label>Email Address</Form.Label>
      <Input {...attrs} type="email" bind:value={$formData.email} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="password">
    <Form.Control let:attrs>
      <Form.Label>Password</Form.Label>
      <Input {...attrs} type="password" bind:value={$formData.password} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field
    {form}
    name="rememberMe"
    class="flex flex-row items-start space-x-3 space-y-0 text-neutral-300"
  >
    <Form.Control let:attrs>
      <Checkbox {...attrs} bind:checked={$formData.rememberMe} />
      <div class="space-y-1 leading-none">
        <Form.Label>Remember Me</Form.Label>
      </div>
      <input name={attrs.name} value={$formData.rememberMe} hidden />
    </Form.Control>
  </Form.Field>

  <Form.Button class="w-full">Sign in</Form.Button>
</form>
