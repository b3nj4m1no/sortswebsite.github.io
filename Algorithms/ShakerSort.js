async function shaker () {
	let sorted;
	let first = 0, last = n - 1;
	do {
		sorted = true;
		let actual_last = 0;
		for (let i = first; i < last; i++) {
			if (bars[i].val > bars[i + 1].val) {
				await swap (i ,i + 1);
				sorted = false;
				actual_last = i;
			}
		}
		last = actual_last;

		if (sorted) {
			break;
		}

		let actual_first = n - 1;
		for (let i = last; i > first; i--) {
			if (bars[i].val < bars[i - 1].val) {
				await swap (i, i - 1);
				sorted = false;
				actual_first = i;
			}
		}
		first = actual_first;
	} while (!sorted);
}