<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Header from '$lib/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<AppShell
	slotSidebarLeft="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto"
>
	<!-- Header
	<svelte:fragment slot="header">
		<DocsAppBar />
	</svelte:fragment>-->
	<!-- Sidebar (Left) -->
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<!-- Page Content-->
	<slot />
	<!-- Page Footer
	<svelte:fragment slot="pageFooter">
		<DocsFooter />
	</svelte:fragment>-->
</AppShell>
