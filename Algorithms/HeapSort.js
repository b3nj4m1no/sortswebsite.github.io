async function heap () {
	for (let i = Math.floor (n / 2); i >= 0; i--) {
		await heapify (i, n - 1);
	}
	for (let i = n - 1; i >= 1; i--) {
		await swap (0, i);
		await heapify (0, i - 1);
	}
}

async function heapify (start, end) {
	let max = start * 2 + 1;
	if (max < end) {
		if (bars[max + 1].val > bars[max].val) {
			max++;
		}
	} else {
		if (max > end) {
			return;
		}
	}

	if (bars[start].val >= bars[max].val) {
		return;
	}

	await swap (start, max);
	await heapify (max, end);
}