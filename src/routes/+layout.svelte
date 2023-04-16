<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Header from '$lib/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import { storeCurrentUrl } from '../store/store';

	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});
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
