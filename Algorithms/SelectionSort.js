async function selection () {
	for (let i = 0; i < n - 1; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (bars[j].val < bars[min].val) {
				min = j;
			}
		}
		await swap (min, i);
	}
}