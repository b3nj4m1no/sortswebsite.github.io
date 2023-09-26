async function comb () {
	let gap = n;
	while (gap > 1) {
		gap = Math.floor (gap / 1.25);

		for (let i = 0; i + gap < n; i++) {
			if (bars[i].val > bars[i + gap].val) {
				await swap (i, i + gap);
			}
		}
	}
}