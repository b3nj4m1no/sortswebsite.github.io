async function bubble () {
	let last = n - 1;
	while (last > 0) {
		let actual_last = 0;
		for (let i = 0; i < last; i++) {
			if (bars[i].val > bars[i + 1].val) {
				await swap (i, i + 1);
				actual_last = i;
			}
		}
		last = actual_last;
	}
}