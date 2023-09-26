async function merge () {
	let a = [];
	let b = [];
	for (let i = 0; i < n; i++) {
		a.push (bars[i].val);
		b.push (bars[i].val);
	}

	await splitMerge (b, 0, n, a);
}

async function splitMerge (b, start, end, a) {
	if (end - start <= 1) {
		return;
	}

	let mid = Math.floor (start + (end - start) / 2);
	await splitMerge (a, start, mid, b);
	await splitMerge (a,   mid, end, b);

	await mergeSort (b, start, mid, end, a);
}

async function mergeSort (a, start, mid, end, b) {
	let i = start, j = mid;

	for (let k = start; k < end; k++) {
		if (i < mid && (j >= end || a[i] <= a[j])) {
			await insert (k, a[i]);
			b[k] = a[i];
			i++;
		} else {
			await insert (k, a[j]);
			b[k] = a[j];
			j++;
		}
	}
}