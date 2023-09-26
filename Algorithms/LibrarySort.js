async function library () {
	let epsilon = 1;
	let S = [];

	let sLen = (1 + epsilon) * n;
	for (let i = 0; i < sLen; i++) {
		S.push (NaN);
	}

	let goal = 1;
	let pos = 1;

	S[0] = bars[0].val;

	sLen = Math.max (1 + epsilon, goal + 1);

	while (pos < n) {
		for (let j = 0; j < goal; j++) {
			let ins = searchFree (bars[pos].val, S, sLen - 1);

			ins++;

			if (!isNaN (S[ins])) {
				let next = ins + 1;
				while (!isNaN (S[next]))
					next++;

				if (next >= sLen) {
					ins--;
					if (!isNaN (S[ins])) {
						next = ins - 1;
						while (!isNaN (S[next]))
							next--;

						while (next < ins) {
							S[next] = S[next + 1];
							next++;
						}
					}
				} else {
					while (next > ins) {
						S[next] = S[next - 1];
						next--;
					}
				}
			}  else if (ins >= sLen) {
				ins--;
				let next = ins - 1;
				while (!isNaN (S[next]))
					next--;

				while (next < ins) {
					S[next] = S[next + 1];
					next++;
				}
			}

			S[ins] = bars[pos].val;
			pos++;

			if (pos >= n)
				break;
		}

		for (let j = sLen - 1, k = Math.min (goal * (2 + 2 * epsilon), (1 + epsilon) * n) - 1, step = Math.floor ((k + 1) / (j + 1)); j >= 0; j--, k -= step) {
			S[k] = S[j];
			S[j] = NaN;
		}

		sLen = Math.min (goal * (2 + 2 * epsilon), n * (1 + epsilon));
		goal <<= 1;
	}

	for (let i = 0, j = 0; i < sLen && j < n; i++) {
		if (!isNaN (S[i])) {
			await insert (j, S[i]);
			j++;
		}
	}
}

function searchFree (e, S, last) {
	let first = 0;

	while (last >= 0 && isNaN (S[last]))
		last--;
	while (first <= last && isNaN (S[first]))
		first++;

	while (first <= last) {
		let mid = first + Math.floor ((last - first) / 2);
		if (isNaN (S[mid])) {
			let tmp = mid + 1;
			while (tmp < last && isNaN (S[tmp]))
				tmp++;

			if (S[tmp] > e) {
				tmp = mid - 1;
				while (mid > first && isNaN (S[mid]))
					mid--;
				if (S[mid] < e)
					return mid;
				last = mid - 1;
			} else {
				first = tmp + 1;
			}
		} else if (S[mid] < e) {
			first = mid + 1;
		} else {
			last = mid - 1;
		}
	}
	if (last >= 0 && isNaN (S[last]))
		last--;

	return last;
}
