<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	let count = 0;
	function handleCountUp() {
		count += 1;
	}
	function handleCountDown() {
		count -= 1;
	}
</script>

<h1>We have moved to sveltekit</h1>

<p>The counter is still alive and kicking though</p>
<p>{count}</p>
<div class="flex gap-4">
	<Button on:click={handleCountDown}>-</Button>
	<Button on:click={handleCountUp}>+</Button>
</div>
