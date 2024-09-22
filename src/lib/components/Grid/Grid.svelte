<div class="grid"><slot /></div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(11, 1fr);
		gap: var(--sa-spacing-md);
	}
</style>
