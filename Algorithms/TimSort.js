async function tim() {
	let run = getRun (n);
	for (let i = 0; i < n; i += run) {
		await insertionSort (i, min (i + run - 1, n - 1));
	}

	for (let size = run; size < n; size <<= 1) {
		for (let left = 0; left < n; left += size << 1) {
			let mid = left + size - 1;
			let right = min (left + (size << 1) - 1, n - 1);

			await mergeTim (left, mid, right);
		}
	}
}

function getRun (N) {
	let r = 0;
	while (N >= 64) {
		r |= N & 1;
		N >>= 1;
	}
	return N + r;
}

async function insertionSort (start, end) {
	for (let i = start + 1; i <= end; i++) {
		let save = bars[i].val;
		let j = i - 1;
		while (j >= start && bars[j].val > save) {
			await insert (j + 1, bars[j].val);
			j--;
		}
		await insert (j + 1, save);
	}
}

async function mergeTim (start, mid, end) {
	let l1 = mid - start + 1, l2 = end - mid;
	let left = [], right = [];

	for (let i = 0; i < l1; i++) {
		left.push (bars[start + i].val);
	}
	for (let i = 0; i < l2; i++) {
		right.push (bars[mid + i + 1].val);
	}

	let i = 0, j = 0;
	for (let k = start; k <= end; k++) {
		if (i < l1 && (j >= l2 || left[i] < right[j])) {
			await insert (k, left[i]);
			i++;
		} else {
			await insert (k, right[j]);
			j++;
		}
	}

}

function min (a, b) {
	return a <= b ? a : b;
}