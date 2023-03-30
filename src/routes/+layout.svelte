<script lang="ts">
  import "@fontsource/noto-sans-kr";

  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<div class="min-h-full bg-[#3498db]">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <p class="text-center">&copy; 2023 MCPE_PC</p>
  </footer>
</div>

<style lang="postcss">
  :global(html, body) {
    @apply h-full;
  }
</style>
