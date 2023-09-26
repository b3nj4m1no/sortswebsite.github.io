async function shell () {
	let gaps = [1];
	for (let k = 1; gaps[gaps.length - 1] < n; k++) {
		gaps.push ((1 << (k + 1)) + 3 * (1 << (k - 1)) + 1);
	}


	while (gaps.length > 0) {
		let gap = gaps.pop();
		for (let out = gap; out < n; out++) {
			let save = bars[out].val;
			let inner = out;

			while (inner > gap - 1 && bars[inner - gap].val >= save) {
				await insert (inner, bars[inner - gap].val);
				inner -= gap;
			}
			await insert (inner, save);
		}
	}
}