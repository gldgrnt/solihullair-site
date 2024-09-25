<script lang="ts"></script>

<div class="grid"><slot /></div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--sa-spacing-md);
		justify-content: var(--justify, 'flex-start');
	}
</style>
