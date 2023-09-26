async function cycle () {

	for (let start = 0; start < n - 1; start++) {
		let item = bars[start].val;
		let pos = start;
		for (let i = start + 1; i < n; i++) {
			if (bars[i].val < item) {
				pos++;
			}
		}

		if (pos == start)
			continue;

		while (item == bars[pos].val) {
			pos++;
		}

		let c = bars[pos].val;
		await insert (pos, item);
		item = c;

		while (pos != start) {
			pos = start;
			for (let i = start + 1; i < n; i++) {
				if (bars[i].val < item) {
					pos++;
				}
			}

			while (item == bars[pos].val)
				pos++;

			let c = bars[pos].val;
			await insert (pos, item);
			item = c;
		}
	}
}