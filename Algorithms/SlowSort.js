async function slow () {
	await slowSort (0, n - 1);
}

async function slowSort (start, end) {
	if (start >= end)
		return;
	let m = Math.floor (start + (end - start) / 2);
	await slowSort (start, m);
	await slowSort (m + 1, end);
	if (bars[end].val < bars[m].val) {
		await swap (end, m);
	}
	await slowSort (start, end - 1);
}