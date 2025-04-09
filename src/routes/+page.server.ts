import db from '$lib/db';

export async function load() {
	const games = await db.game.findMany();

	return {
		games: games
	};
}
