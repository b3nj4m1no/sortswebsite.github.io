async function insertion () {
	for (let i = 1; i < n; i++) {
		let val = bars[i].val;
		let j = i - 1;
		while (j >= 0 && bars[j].val > val) {
			await insert (j + 1, bars[j].val);
			j--;
		}
		await insert (j + 1, val);
	}
}