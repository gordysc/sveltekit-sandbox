<script lang="ts">
  import Button from "@/components/ui/button/button.svelte";
</script>

<h1 class="text-2xl font-semibold">Dashboard</h1>

<form method="POST" action="?/logout" class="mt-5">
  <Button type="submit" variant="destructive">Logout</Button>
</form>
