async function patience () {
	let piles = [];

	for (let i = 0; i < n; i++) {
		let num = bars[i].val;
		let dest = NaN;
		for (j in piles) {
			if (num >= piles[j][piles[j].length - 1]) {
				dest = j;
				break;
			}
		}
		
		if (isNaN (dest)) {
			piles.push ([num]);
		} else {
			piles[dest].push (num);
		}
	}

	for (let i = 0; i < n; i++) {
		let dest = 0;
		for (let p = 1; p < piles.length; p++) {
			let pile = piles[p];
			if (pile[0] < piles[dest][0]) {
				dest = p;
			}
		}
		let dist = piles[dest];
		await insert (i, dist.shift());

		if (dist.length == 0) {
			piles.splice (dest, 1);
		}
	}
}