<script>
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import LightSwitch from "@/components/light-switch.svelte";
</script>

<ModeWatcher />

<div class="container mx-auto">
  <div class="flex justify-between pt-5">
    <div class="text-3xl font-semibold">SvelteKit Sandbox</div>
    <LightSwitch />
  </div>

  <div class="mt-5">
    <slot />
  </div>
</div>
