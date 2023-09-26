async function dualpivotquick () {
	await dpQuickSort (0, n - 1);
}

async function dpQuickSort (start, end) {
	if (start < end) {
		let lp, rp;
		[lp, rp] = await dpPartition (start, end);
		await dpQuickSort (start, lp - 1);
		await dpQuickSort (lp + 1, rp - 1);
		await dpQuickSort (rp + 1, end);
	}
}

async function dpPartition (start, end) {
	if (bars[start].val > bars[end].val) {
		await swap (start, end);
	}

	let j = start + 1;
	let g = end - 1, k = start + 1, p = bars[start].val, q = bars[end].val;

	while (k <= g) {
		if (bars[k].val < p) {
			await swap (k, j);
			j++;
		} else if (bars[k].val >= q) {
			while (bars[g].val > q && k < g) {
				g--;
			}
			await swap (k, g);
			g--;
			if (bars[k].val < p) {
				await swap (k, j);
				j++;
			}
		}
		k++;
	}
	j--;
	g++;

	await swap (start, j);
	await swap (end, g);

	return [j, g];
}