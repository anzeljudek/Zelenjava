<script lang="ts">
	export let data;
	const { games } = data;
</script>

<h1 class="text-3xl font-bold">GAMES</h1>

<form method="POST" action="?/addGame" class="bg-blue-300 flex flex-col gap-4 p-4">
	<input name="name" required />
	<select name="type">
		<option value="strategy">strategy</option>
		<option value="racing">racing</option>
		<option value="sandbox">sandbox</option>
		<option value="FPS">FPS</option>
		<option value="story">story</option>
	</select>

	<input name="rating" type="number" required />
	<button type="submit">Dodaj žival</button>
</form>

<div class="grid grid-cols-3 gap-2 p-4 bg-red-200">
	{#each games as g}
		<div class="bg-red-300 p-2 text-center rounded-sm border-2">
			<p class="font-bold">{g.name}</p>
			<p>Rating: ({g.rating})</p>
			<p>Type: {g.type}</p>
			<a class="rounded-sm border-2 px-4 border-red-400 bg-red-400" href={g.id}>Edit</a>
		</div>
	{/each}
</div>
