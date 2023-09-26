async function oddeven () {
	let sorted;
	do {
		sorted = true;

		for (let i = 1; i < n - 1; i += 2) {
			if (bars[i].val > bars[i + 1].val) {
				await swap (i, i + 1);
				sorted = false;
			}
		}
		for (let i = 0; i < n - 1; i += 2) {
			if (bars[i].val > bars[i + 1].val) {
				await swap (i, i + 1);
				sorted = false;
			}
		}

	} while (!sorted);
}