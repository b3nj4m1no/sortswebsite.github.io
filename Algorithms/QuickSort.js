function quick () {
	quickSort (0, n - 1);
}

async function quickSort (start, end) {
	if (start < end) {
		let pivot = await partition (start, end);
		await quickSort (start, pivot - 1);
		await quickSort (pivot + 1, end  );
	}
}

async function partition (start, end) {
	let pivot = bars[end].val;
	let pivotIndex = start;

	for (let i = start; i < end; i++) {
		if (bars[i].val < pivot) {
			await swap (i, pivotIndex);
			pivotIndex++;
		}
	}
	await swap (pivotIndex, end);
	return pivotIndex;
}