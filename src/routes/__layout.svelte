<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot></slot>
</main>

<footer>
	<p>MCPE_PC</p>
</footer>
