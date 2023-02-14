<script>
	export let diff_orig = '';
	/**
	 * @type {string | any[]}
	 */
	export let diff = [];
</script>

{#if diff.length > 1}
	{diff_orig} <br /><br />
	{#each diff as item}
		{#if item.added || item.removed}
			<span
				class={item.added
					? 'bg-green-100 dark:bg-surface-900 text-green-400'
					: item.removed
					? 'bg-red-100 dark:bg-surface-900 text-red-400'
					: ''}>{item.value}</span
			>
		{/if}
	{/each}
{:else}
	{diff_orig}
{/if}